const h=t=>{let n="";if(!t.report_content)return"No report content available.";n+=`*Report Date:* ${t.report_date?new Date(t.report_date).toLocaleDateString():"N/A"}

`;try{const r=JSON.parse(t.report_content);typeof r=="object"&&r!==null&&t.tests?t.tests.forEach((a,f)=>{n+=`*Test: ${a.name}*
`,r[a.id]?Object.entries(r[a.id]).forEach(([l,o])=>{var u;const e=(u=a.default_parameters)==null?void 0:u.find(m=>m.name===l);let i=String(o),c="";if(e){const m=e.unit?` _${e.unit}_`:"";if(e.type==="boolean"){const p=o===!0||o==="true";i=p?"*Reactive*":"Non-Reactive",p||(c="`Normal: Non-Reactive`")}else if(e.type==="number"){const p=typeof o=="string"?parseFloat(o):typeof o=="number"?o:NaN;if(e.lower_limit!=null||e.upper_limit!=null){let s=[];e.lower_limit!=null&&s.push(`${e.lower_limit}`),e.upper_limit!=null&&s.push(`${e.upper_limit}`),c=`\`Normal: ${s.join(" - ")}\`${m}`,!isNaN(p)&&(e.lower_limit!=null&&p<e.lower_limit||e.upper_limit!=null&&p>e.upper_limit)&&(i=`*${i}*`)}}e.unit&&(i+=m)}n+=`${l}: ${i}
`,c&&((e==null?void 0:e.type)==="boolean"&&(o===!0||o==="true")||(n+=`${c}
`))}):n+=`_No parameters reported for this test._
`,f<t.tests.length-1&&(n+=`
`)}):n+=t.report_content}catch{n+=t.report_content}return n},N=t=>{var o;if(!((o=t==null?void 0:t.Patient)!=null&&o.phone)){alert("Cannot share report via WhatsApp: Patient phone number is not available.");return}if(!(t!=null&&t.report_content)){alert("Cannot share report: No report content is available to share.");return}const n=t.Patient.name||"Patient",r=h(t),a=`Hello ${n},

Your lab report is ready.

${r}`,l=`https://wa.me/${_(t.Patient.phone)}?text=${encodeURIComponent(a)}`;window.open(l,"_blank")},_=t=>{let n=t.replace(/\D/g,"");const r=/^(?:\\+?91)?[\\s-]*?(\\d{10})$/,a=n.match(r);return a?n="91"+a[1]:n.startsWith("91")||(n="91"+n),n};export{N as h};
