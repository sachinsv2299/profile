const models = window['powerbi-client'].models;
const embedConfiguration = {
    type: 'report',
    id: 'YOUR_REPORT_ID',
    embedUrl: 'YOUR_EMBED_URL',
    accessToken: 'YOUR_ACCESS_TOKEN',
    tokenType: models.TokenType.Embed,
    settings: {
        panes: {
            filters: {
                visible: false
            },
            pageNavigation: {
                visible: false
            }
        }
    }
};

const reportContainer = document.getElementById('reportContainer');
const report = powerbi.embed(reportContainer, embedConfiguration);