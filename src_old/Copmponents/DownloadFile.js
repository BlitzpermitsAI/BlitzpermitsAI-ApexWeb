export const handleDownloadFile = (e, projectId, userId) => {
    // alert("download file");
    const data="hello";
         const base64Pdf = `data:application/pdf;base64,${data}`; // Your Base64 string here

        // Convert Base64 to binary
        const byteCharacters = atob(base64Pdf.split(",")[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        // Create Blob from binary data
        const blob = new Blob([byteArray], { type: "application/pdf" });

        // Create a temporary anchor element
        const tempAnchor = document.createElement("a");
        tempAnchor.href = window.URL.createObjectURL(blob);
        tempAnchor.download = "report_document.pdf"; // Name of the downloaded file

        // Programmatically click the anchor element to trigger the download
        tempAnchor.click();

        // Clean up
        window.URL.revokeObjectURL(tempAnchor.href);
  };