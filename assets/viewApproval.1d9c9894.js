import{at as t}from"./index.c0f9d41d.js";const s=t("viewApproval",{state:()=>({rows:[]}),getters:{getArchivedApprovalList(r){return r.rows.filter(e=>e.is_archive===!0)},getUnarchivedApprovalList(r){return r.rows.filter(e=>e.is_archive===!1)}},actions:{}});export{s as u};