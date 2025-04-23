
import MainLayout from '@/components/layout/main-layout';
import CsvUpload from '@/components/upload/csv-upload';

const Upload = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Upload Keywords</h1>
            <p className="text-muted-foreground">
              Upload your CSV file with keywords to generate articles
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <CsvUpload />
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-4">How to Format Your CSV</h3>
            <p className="mb-4 text-muted-foreground">
              Your CSV file should be formatted with the following requirements:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Include a header row with at least one column named <strong>keyword</strong></li>
              <li>Optional columns: <strong>title</strong>, <strong>tone</strong> (conversational, professional, friendly), and <strong>length</strong> (short, medium, long)</li>
              <li>Each row should represent one article to generate</li>
              <li>Maximum file size: 5MB</li>
              <li>Maximum of 50 keywords per upload</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-md font-medium mb-2">Sample CSV Format</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-2 border">keyword</th>
                      <th className="px-4 py-2 border">title (optional)</th>
                      <th className="px-4 py-2 border">tone (optional)</th>
                      <th className="px-4 py-2 border">length (optional)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">content marketing tips</td>
                      <td className="px-4 py-2 border">10 Advanced Content Marketing Tips for 2025</td>
                      <td className="px-4 py-2 border">conversational</td>
                      <td className="px-4 py-2 border">long</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">email marketing automation</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">professional</td>
                      <td className="px-4 py-2 border">medium</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">seo best practices</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Upload;
