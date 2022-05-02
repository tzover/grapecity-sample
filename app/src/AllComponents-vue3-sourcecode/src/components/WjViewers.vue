<template>
    <div>
        <h3>
            ReportViewerコントロール
        </h3>
        <div>
            このセクションではReportViewerコントロールを表示します。

        </div>
        <p />
        <div class="seperator" />
        <wj-report-viewer
                :service-url="reportServiceUrl"
                :file-path="reportFilePath" />

        <p />
        <h3>
            PdfViewerコントロール
        </h3>
        <div>
            このセクションではPdfViewerコントロールを表示します。

        </div>
        <p />
        <div class="seperator" />
        <wj-pdf-viewer
                :service-url="pdfServiceUrl"
                :file-path="pdfFilePath" />

    </div>
</template>


<script>
export default {
    data: function () {
        return {
            reportServiceUrl: 'https://www.grapecity.com/componentone/demos/aspnet/c1webapi/latest/api/report',
            reportFilePath: 'ReportsRoot/Formatting/AlternateBackground.flxr',
            reportName: 'AlternateBackground',
            pdfServiceUrl: 'https://www.grapecity.com/componentone/demos/aspnet/c1webapi/latest/api/pdf',
            pdfFilePath: 'pdfroot/DefaultDocument.pdf'    
        }
    }
};
</script>
