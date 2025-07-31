import { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        if (file) {
            console.log('Uploading:', file.name);
            // You’ll connect this with backend API later
        }
    };

    return (
        <form
            onSubmit={handleUpload}
            className="bg-white p-6 shadow-md rounded-md mt-4"
        >
            <h2 className="text-lg font-semibold mb-4">Upload Publication File</h2>
            <input
                type="file"
                accept=".bib,.xlsx"
                onChange={(e) => setFile(e.target.files[0])}
                className="block w-full mb-4"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Upload
            </button>
        </form>
    );
};

export default UploadForm;
