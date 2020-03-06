export const DEFAULT_INDEX_HTML = String.raw`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, user-scalable=yes" />
    <style>
      html {
        font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        font-size: 16px;
      }
      body {
        color: #4a4a4a;
        margin: 8px;
        font-size: 1em;
        font-weight: 400;
      }
      header {
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
      }
      main {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      a {
        color: #3273dc;
        cursor: pointer;
        text-decoration: none;
      }
      a:hover {
        color: #000;
      }
      button {
        color: #fff;
        background-color: #3298dc;
        border-color: transparent;
        cursor: pointer;
        text-align: center;
      }
      button:hover {
        background-color: #2793da;
        flex: none;
      }
      .spacer {
        flex: auto;
      }
      .small {
        font-size: 0.75rem;
      }
      footer {
        margin-top: 16px;
        display: flex;
        align-items: center;
      }
      .header-label {
        margin-right: 4px;
      }
      .benchmark-set {
        margin: 8px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .benchmark-title {
        font-size: 3rem;
        font-weight: 600;
        word-break: break-word;
        text-align: center;
      }
      .benchmark-graphs {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
      }
      .benchmark-chart {
        max-width: 1000px;
      }
    </style>
    <title>Benchmarks</title>
  </head>
  <body>
    <header id="header">
      <div class="header-item">
        <strong class="header-label">Last Update:</strong>
        <span id="last-update"></span>
      </div>
    </header>
    <main id="main"></main>
    <footer>
      <button id="dl-button">Download data as JSON</button>
      <div class="spacer"></div>
      <div class="small">Powered by <a rel="noopener" href="https://github.com/matchai/heads-up">heads-up</a></div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="data.js"></script>
    <script id="main-script">
      'use strict';
      (function() {
        const data = window.TIMING_DATA;
        function init() {
          // Render header
          document.getElementById('last-update').textContent = new Date(data.lastUpdate).toString();
          // Render footer
          document.getElementById('dl-button').onclick = () => {
            const dataUrl = 'data:,' + JSON.stringify(data, null, 2);
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'benchmark_data.json';
            a.click();
          };
        }

        const main = document.getElementById('main');
        const options = {
          chart: {
            type: 'area',
            stacked: 'true'
          },
          series: data.entries
        }
        const chart = new ApexCharts(main, options);
        chart.render();
        init()
      })();
    </script>
  </body>
</html>
`