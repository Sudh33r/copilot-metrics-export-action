/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 135:
/***/ ((module) => {

module.exports = eval("require")("@actions/artifact");


/***/ }),

/***/ 222:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 49:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../../usr/local/share/nvm/versions/node/v20.12.1/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(222);
// EXTERNAL MODULE: ../../usr/local/share/nvm/versions/node/v20.12.1/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/github
var github = __nccwpck_require__(49);
// EXTERNAL MODULE: ../../usr/local/share/nvm/versions/node/v20.12.1/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/artifact
var _notfound_actions_artifact = __nccwpck_require__(135);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./src/enterprisecsv.js
/**
 * Converts the provided copilot enterprise copilot usage data into a CSV string.
 * 
 * Data source: https://docs.github.com/en/rest/copilot/copilot-usage?apiVersion=2022-11-28#get-a-summary-of-copilot-usage-for-enterprise-members
 *
 * @param {Array} data - The data to be converted into CSV.
 * @returns {string} The CSV string representation of the data.
 */
const enterprisecsv = (data) => {
  let csv = 'day,total_suggestions_count,total_acceptances_count,total_lines_suggested,total_lines_accepted,total_active_users,total_chat_acceptances,total_chat_turns,total_active_chat_users,language,editor,suggestions_count,acceptances_count,lines_suggested,lines_accepted,active_users\n';
  data.forEach((row) => {
    row.breakdown.forEach((breakdown) => {
      csv += `${row.day},${row.total_suggestions_count},${row.total_acceptances_count},${row.total_lines_suggested},${row.total_lines_accepted},${row.total_active_users},${row.total_chat_acceptances},${row.total_chat_turns},${row.total_active_chat_users},${breakdown.language},${breakdown.editor},${breakdown.suggestions_count},${breakdown.acceptances_count},${breakdown.lines_suggested},${breakdown.lines_accepted},${breakdown.active_users}\n`;
    });
  });
  return csv;
};

/* harmony default export */ const src_enterprisecsv = (enterprisecsv);
;// CONCATENATED MODULE: ./src/orgcsv.js
/**
 * Converts the provided copilot org copilot usage data into a CSV string.
 * 
 * Data source: https://docs.github.com/en/rest/copilot/copilot-usage?apiVersion=2022-11-28#get-a-summary-of-copilot-usage-for-organization-members
 *
 * @param {Array} data - The data to be converted into CSV.
 * @returns {string} The CSV string representation of the data.
 */
const orgcsv = (data) => {
  let csv = 'day,total_suggestions_count,total_acceptances_count,total_lines_suggested,total_lines_accepted,total_active_users,total_chat_acceptances,total_chat_turns,total_active_chat_users,language,editor,suggestions_count,acceptances_count,lines_suggested,lines_accepted,active_users\n';
  data.forEach((row) => {
    row.breakdown.forEach((breakdown) => {
      csv += `${row.day},${row.total_suggestions_count},${row.total_acceptances_count},${row.total_lines_suggested},${row.total_lines_accepted},${row.total_active_users},${row.total_chat_acceptances},${row.total_chat_turns},${row.total_active_chat_users},${breakdown.language},${breakdown.editor},${breakdown.suggestions_count},${breakdown.acceptances_count},${breakdown.lines_suggested},${breakdown.lines_accepted},${breakdown.active_users}\n`;
    });
  });
  return csv;
};

/* harmony default export */ const src_orgcsv = (orgcsv);
;// CONCATENATED MODULE: ./src/teamcsv.js
/**
 * Converts the provided copilot team copilot usage data into a CSV string.
 * 
 * Data source: https://docs.github.com/en/rest/copilot/copilot-usage?apiVersion=2022-11-28#get-a-summary-of-copilot-usage-for-a-team
 *
 * @param {Array} data - The data to be converted into CSV.
 * @returns {string} The CSV string representation of the data.
 */
const teamcsv_orgcsv = (data) => {
  let csv = 'day,total_suggestions_count,total_acceptances_count,total_lines_suggested,total_lines_accepted,total_active_users,total_chat_acceptances,total_chat_turns,total_active_chat_users,language,editor,suggestions_count,acceptances_count,lines_suggested,lines_accepted,active_users\n';
  data.forEach((row) => {
    row.breakdown.forEach((breakdown) => {
      csv += `${row.day},${row.total_suggestions_count},${row.total_acceptances_count},${row.total_lines_suggested},${row.total_lines_accepted},${row.total_active_users},${row.total_chat_acceptances},${row.total_chat_turns},${row.total_active_chat_users},${breakdown.language},${breakdown.editor},${breakdown.suggestions_count},${breakdown.acceptances_count},${breakdown.lines_suggested},${breakdown.lines_accepted},${breakdown.active_users}\n`;
    });
  });
  return csv;
};

/* harmony default export */ const teamcsv = (teamcsv_orgcsv);
;// CONCATENATED MODULE: ./index.js








const getInputs = () => {
  const inputs = {
    access_token: (0,core.getInput)('access-token'),
    enterprise_summary: (0,core.getInput)('enterprise-summary'),
    enterprise_name: (0,core.getInput)('enterprise-name'),
    org_summary: (0,core.getInput)('org-summary'),
    org_name: (0,core.getInput)('org-name'),
    team_summary: (0,core.getInput)('team-summary'),
    team_name: (0,core.getInput)('team-name')
  };
  return inputs;
}

const run = async () => {
  try {
    const inputs = getInputs();
    const octokit = (0,github.getOctokit)(inputs.access_token);

    let enterprise_req;
    let org_req;
    let team_req;

    const get_enterprise_summary = inputs.enterprise_summary === 'true' || inputs.enterprise_summary === true ? true : false;
    if (get_enterprise_summary) {
      const enterprise_name = inputs.enterprise_name;
      if (enterprise_name === '') {
        (0,core.setFailed)("Enterprise Name is required to retreive Enterprise Copilot usage");
        return;
      }
      else {
        enterprise_req = octokit.request('GET /enterprises/{enterprise}/copilot/usage', {
          enterprise: enterprise_name,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
      }
    }
    
    const get_org_summary = inputs.org_summary === 'true'|| inputs.org_summary === true ? true : false;
    if (get_org_summary) {
      const org_name = inputs.org_name;
      if (org_name === '') {
        (0,core.setFailed)("Organization Name is required to retreive Organization Copilot usage");
        return;
      }
      else {
        org_req = octokit.request('GET /orgs/{org}/copilot/usage', {
          org: org_name,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
      }
    }

    const get_team_summary = inputs.team_summary === 'true' || inputs.team_summary === true ? true : false;
    if (get_team_summary) {
      const team_name = inputs.team_name;
      if (team_name === '' || org_name === '') {
        (0,core.setFailed)("Both Organization and Team Name are required to retreive Team Copilot usage");
        return;
      }
      else {
        team_req = octokit.request('GET /orgs/{org}/team/{team}/copilot/usage', {
          team: team_name,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
      }
    }

    const artifact = new _notfound_actions_artifact.DefaultArtifactClient()

    if (get_enterprise_summary) {
      const enterprise_response = await enterprise_req;
      const enterprise_csv = src_enterprisecsv(enterprise_response.data);
      (0,external_fs_namespaceObject.writeFileSync)('enterprise_copilot_usage_metrics.csv', enterprise_csv);
      await artifact.uploadArtifact('enterprise_copilot_usage_metrics', ['enterprise_copilot_usage_metrics.csv']);
    }

    if (get_org_summary) {
      const org_response = await org_req;
      const org_csv = src_orgcsv(org_response.data);
      (0,external_fs_namespaceObject.writeFileSync)('org_copilot_usage_metrics.csv', org_csv);
      await artifact.uploadArtifact('org_copilot_usage_metrics', ['org_copilot_usage_metrics.csv']);
    }

    if (get_team_summary) {
      const team_response = await team_req;
      const team_csv = teamcsv(team_response.data);
      (0,external_fs_namespaceObject.writeFileSync)('team_copilot_usage_metrics.csv', team_csv);
      await artifact.uploadArtifact('team_copilot_usage_metrics', ['team_copilot_usage_metrics.csv']);
    }
  }
  catch (error) {
    (0,core.setFailed)(error.message);
  }
}

run();
})();

module.exports = __webpack_exports__;
/******/ })()
;