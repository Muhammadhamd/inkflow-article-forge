
import { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface CsvUploadProps {
  onUpload?: (csvData: any[]) => void;
}

const CsvUpload: React.FC<CsvUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      parseAndPreviewCsv(selectedFile);
    } else {
      setFile(null);
      setPreviewData(null);
      alert('Please select a valid CSV file');
    }
  };

  const parseAndPreviewCsv = (file: File) => {
    setIsLoading(true);
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const rows = text.split('\n').filter(Boolean);
        const headers = rows[0].split(',').map(header => header.trim());
        
        const parsedData = rows.slice(1, 6).map(row => {
          const values = row.split(',').map(value => value.trim());
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index] || '';
            return obj;
          }, {} as Record<string, string>);
        });
        
        setPreviewData(parsedData);
      } catch (error) {
        console.error('Error parsing CSV:', error);
        alert('Error parsing CSV file. Please check the format.');
      }
      
      setIsLoading(false);
    };
    
    reader.readAsText(file);
  };

  const handleStartWriting = () => {
    if (file && onUpload) {
      setIsLoading(true);
      // In a real implementation, you would parse the full CSV
      // and pass all data to the onUpload callback
      setTimeout(() => {
        if (previewData) {
          onUpload(previewData);
        }
        setIsLoading(false);
        // For demo purposes, navigate to articles page after uploading
        window.location.href = "/articles";
      }, 1500);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Keywords CSV</CardTitle>
        <CardDescription>
          Upload a CSV file containing the keywords for article generation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div 
            className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/20 transition cursor-pointer"
            onClick={handleBrowseClick}
          >
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleFileChange} 
              className="hidden" 
              ref={fileInputRef} 
            />
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-semibold">Drag & drop or click to browse</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Your CSV file should include a keywords column
            </p>
            <Button variant="outline" size="sm" type="button">
              Browse Files
            </Button>
          </div>

          {isLoading && (
            <div className="flex justify-center py-4">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-muted h-2 w-2"></div>
                <div className="rounded-full bg-muted h-2 w-2"></div>
                <div className="rounded-full bg-muted h-2 w-2"></div>
              </div>
            </div>
          )}

          {previewData && previewData.length > 0 && (
            <div className="overflow-auto">
              <h3 className="text-lg font-medium mb-3">CSV Preview</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    {Object.keys(previewData[0]).map((header) => (
                      <TableHead key={header}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewData.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {Object.values(row).map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell as string}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-xs text-muted-foreground mt-2">
                Showing first 5 rows of {file?.name}
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => { setFile(null); setPreviewData(null); }}>
          Clear
        </Button>
        <Button 
          disabled={!previewData || isLoading} 
          onClick={handleStartWriting}
        >
          {isLoading ? 'Processing...' : 'Start Writing'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CsvUpload;
