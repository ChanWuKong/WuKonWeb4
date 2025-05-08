import{u as Me,r as d,j as e,a as I,V as p,b as be,d as t,c as Je,e as nr}from"./index-Cr5qqBjw.js";const or=t.div`
  padding: 20px;
`,ar=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,ir=t.h2`
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,dr=t.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.85)":"#606266"};
`,cr=t.thead`
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
  
  th {
    padding: 15px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,lr=t.tbody`
  tr {
    &:hover {
      background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
    }
  }
  
  td {
    padding: 15px;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,pr=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,xr=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 15px;
  
  label {
    color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
    font-size: 14px;
  }
  
  select {
    padding: 6px 10px;
    border-radius: 20px;
    border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
    background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
`,fr=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,hr=t.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,ur=t.div`
  display: flex;
  gap: 10px;
`,fe=t.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${({$active:r,theme:s})=>r?"#409eff":s.mode==="dark"?"#252525":"#f5f7fa"};
  color: ${({$active:r,theme:s})=>r?"#ffffff":s.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  opacity: ${({$disabled:r})=>r?.6:1};
  
  &:hover {
    background: ${({$active:r,$disabled:s,theme:u})=>s?r?"#409eff":u.mode==="dark"?"#252525":"#f5f7fa":r?"#66b1ff":u.mode==="dark"?"#333":"#e6e6e6"};
  }
`,Be=t.button`
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  background: ${({$type:r})=>r==="primary"?"#409eff":r==="danger"?"#f56c6c":"#909399"};
  color: white;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: ${({$type:r})=>r==="primary"?"#66b1ff":r==="danger"?"#f78989":"#a6a9ad"};
  }
`,mr=t.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
`,br=t.div`
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 60%;
`,gr=t.input`
  padding: 10px 15px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
  border-radius: 20px;
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
  flex: 1;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
  }
`,X=t.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #409eff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: #66b1ff;
  }
`,Ce=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Qe=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 12px;
  padding: 25px;
  width: 550px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  
  /* 隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`,Se=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,De=t.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Ee=t.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#909399"};
  
  &:hover {
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  }
`,jr=t.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`,O=t.div`
  margin-bottom: 5px;
  background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.02)"};
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  }
`,W=t.div`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.5)":"#909399"};
  margin-bottom: 6px;
`,Y=t.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-weight: 500;
`,Ie=t.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,Ve=t(Qe)`
  max-width: 550px;
`,D=t.div`
  margin-bottom: 20px;
`,T=t.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,B=t.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
  border-radius: 8px;
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
`,Fe=t.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
  border-radius: 8px;
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
`,Le=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,Re=t.input`
  margin-right: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`,_e=t.label`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.8)":"#606266"};
  cursor: pointer;
`,He=t(B)`
  /* 自定义日期输入框样式 */
`,yr=()=>{Me();const[r,s]=d.useState([]),[u,P]=d.useState(!0),[k,h]=d.useState(1),[$,E]=d.useState(10),[g,z]=d.useState(1),[H,V]=d.useState(0),[F,M]=d.useState(""),[i,f]=d.useState(null),[se,x]=d.useState(!1),[w,C]=d.useState(!1),[L,Z]=d.useState(!1),[v,te]=d.useState({nickname:"",bubbleId:"",isSubscribed:!1,subscriptionType:"",subscriptionExpiryDate:""}),[ne,ie]=d.useState(!1),[je,oe]=d.useState(!1),[c,R]=d.useState({phone:"",username:"",nickname:"",password:"",confirmPassword:"",isSubscribed:!1,subscriptionType:"monthly",subscriptionExpiryDate:new Date().toISOString().split("T")[0],bubbleId:""}),[de,ce]=d.useState(!1),[b,U]=d.useState({phone:"",username:"",password:"",confirmPassword:"",bubbleId:""}),J=[10,20,50,100],Q=async(n=1,o=$,l="")=>{try{P(!0);const y=I.userData;if(!y||!y.username){p.error("无法获取当前用户信息");return}const m=await be.getAdminUsersList({username:y.username,page:n,pageSize:o,searchTerm:l||void 0});s(m.users),z(m.totalPages),V(m.total),h(m.currentPage),E(m.pageSize)}catch(y){console.error("加载用户数据失败:",y),p.error("加载用户数据失败，请稍后重试")}finally{P(!1)}};d.useEffect(()=>{Q(k,$)},[]);const ae=n=>{n<1||n>g||(h(n),Q(n,$,F))},$e=n=>{const o=Number(n.target.value);E(o),h(1),Q(1,o,F)},a=()=>{h(1),Q(1,$,F)},j=n=>{f(n),x(!0)},_=async n=>{if(window.confirm("确定要删除该用户吗？此操作不可恢复"))try{const o=I.userData;if(!o||!o.username){p.error("无法获取当前用户信息");return}const l=await be.deleteAdminUser({adminUsername:o.username,userId:n});l.success?(p.success("用户已成功删除"),Q(k,$,F)):p.error(l.message||"删除用户失败")}catch(o){console.error("删除用户失败:",o),p.error(o.message||"删除用户失败，请稍后重试")}},S=n=>n?new Date(n).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"无",A=()=>{i&&(te({nickname:i.nickname||"",bubbleId:i.bubbleId||"",isSubscribed:i.isSubscribed,subscriptionType:i.subscriptionType||"monthly",subscriptionExpiryDate:i.subscriptionExpiryDate?new Date(i.subscriptionExpiryDate).toISOString().split("T")[0]:new Date().toISOString().split("T")[0]}),Z(!0))},xe=n=>{const{name:o,value:l,type:y}=n.target;if(y==="checkbox"){const m=n.target;te({...v,[o]:m.checked})}else te(o==="subscriptionType"?{...v,[o]:l,subscriptionExpiryDate:Ae(l)}:{...v,[o]:l})},er=async n=>{if(n.preventDefault(),!!i)try{ie(!0);const o=I.userData;if(!o||!o.username){p.error("无法获取当前用户信息"),ie(!1);return}const l={adminUsername:o.username,userId:i.id,userData:{nickname:v.nickname,bubbleId:v.bubbleId,isSubscribed:v.isSubscribed}};v.isSubscribed&&(l.userData.subscriptionType=v.subscriptionType,l.userData.subscriptionExpiryDate=v.subscriptionExpiryDate);const y=await be.editAdminUser(l);if(y.success){p.success("用户信息已成功更新");const m=r.map(Ue=>Ue.id===i.id?y.user:Ue);s(m),i.id===y.user.id&&f(y.user),Z(!1)}else p.error(y.message||"更新用户信息失败")}catch(o){console.error("更新用户信息失败:",o),p.error(o.message||"更新用户信息失败，请稍后重试")}finally{ie(!1)}},rr=()=>{if(!i)return;const n=`
泡泡用户信息
-------------------
用户ID: ${i.id}
用户名: ${i.username}
泡泡ID: ${i.bubbleId||"无"}
昵称: ${i.nickname||"无"}
手机号: ${i.phone}
订阅状态: ${i.isSubscribed?`已订阅 (${i.subscriptionType==="monthly"?"月度":i.subscriptionType==="yearly"?"年度":i.subscriptionType==="trial"?"试用":"未知"})`:"未订阅"}
订阅到期时间: ${i.isSubscribed&&i.subscriptionExpiryDate?S(i.subscriptionExpiryDate):"无"}
注册时间: ${S(i.createdAt)}
最后更新时间: ${S(i.updatedAt)}
-------------------
`.trim();navigator.clipboard.writeText(n).then(()=>{p.success("用户信息已复制到剪贴板")}).catch(o=>{console.error("复制到剪贴板失败:",o),p.error("复制到剪贴板失败")})},Ae=n=>{const o=new Date;let l=new Date(o);switch(n){case"monthly":l.setMonth(o.getMonth()+1);break;case"yearly":l.setFullYear(o.getFullYear()+1);break;case"trial":l.setDate(o.getDate()+7);break;default:l.setMonth(o.getMonth()+1)}return l.toISOString().split("T")[0]},N=n=>{const{name:o,value:l,type:y}=n.target;if(y==="checkbox"){const m=n.target;R({...c,[o]:m.checked})}else{if(R(o==="subscriptionType"?{...c,[o]:l,subscriptionExpiryDate:Ae(l)}:{...c,[o]:l}),b[o]&&U({...b,[o]:""}),o==="password"||o==="confirmPassword"){const m=o==="password"?c.confirmPassword:c.password;m&&l!==m?U({...b,confirmPassword:"两次输入的密码不一致"}):m&&l===m&&U({...b,confirmPassword:""})}o==="username"&&(l&&!/^[a-zA-Z_]/.test(l)?U({...b,username:"用户名必须以字母或下划线开头"}):U({...b,username:""})),o==="phone"&&(l&&!/^1[3-9]\d{9}$/.test(l)?U({...b,phone:"请输入有效的中国大陆手机号码"}):U({...b,phone:""}))}},sr=()=>{let n=!0;const o={...b},l=/^1[3-9]\d{9}$/;c.phone?l.test(c.phone)?o.phone="":(o.phone="请输入有效的中国大陆手机号码",n=!1):(o.phone="手机号码为必填项",n=!1);const y=/^[a-zA-Z_]/;return c.username?y.test(c.username)?o.username="":(o.username="用户名必须以字母或下划线开头",n=!1):(o.username="用户名为必填项",n=!1),c.password?o.password="":(o.password="密码为必填项",n=!1),c.confirmPassword?c.password!==c.confirmPassword?(o.confirmPassword="两次输入的密码不一致",n=!1):o.confirmPassword="":(o.confirmPassword="请确认密码",n=!1),c.bubbleId?o.bubbleId="":(o.bubbleId="泡泡ID为必填项",n=!1),U(o),n},tr=async n=>{if(n.preventDefault(),!!sr())try{ce(!0);const o=I.userData;if(!o||!o.username){p.error("无法获取当前用户信息"),ce(!1);return}const l={adminUsername:o.username,phone:c.phone,username:c.username,password:c.password,nickname:c.nickname,bubbleId:c.bubbleId,isSubscribed:c.isSubscribed};c.isSubscribed&&(l.subscriptionType=c.subscriptionType,l.subscriptionExpiryDate=c.subscriptionExpiryDate);const y=await be.createAdminUser(l);p.success("用户创建成功"),Q(k,$,F),oe(!1),R({phone:"",username:"",nickname:"",password:"",confirmPassword:"",isSubscribed:!1,subscriptionType:"monthly",subscriptionExpiryDate:new Date().toISOString().split("T")[0],bubbleId:""}),U({phone:"",username:"",password:"",confirmPassword:"",bubbleId:""})}catch(o){console.error("创建用户失败:",o),p.error(o.message||"创建用户失败，请稍后重试")}finally{ce(!1)}};return e.jsxs(or,{children:[e.jsxs(ar,{children:[e.jsx(ir,{children:"用户管理"}),e.jsxs(mr,{children:[e.jsxs(br,{children:[e.jsx(gr,{placeholder:"搜索用户名、昵称或手机号",value:F,onChange:n=>M(n.target.value),onKeyPress:n=>n.key==="Enter"&&a()}),e.jsx(X,{onClick:a,children:"搜索"})]}),e.jsx(X,{onClick:()=>oe(!0),style:{background:"#67c23a",whiteSpace:"nowrap"},children:"新建用户"})]}),u?e.jsx("div",{style:{padding:"20px 0",textAlign:"center"},children:"加载中..."}):e.jsxs(e.Fragment,{children:[e.jsxs(dr,{children:[e.jsx(cr,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"用户名"}),e.jsx("th",{children:"泡泡ID"}),e.jsx("th",{children:"昵称"}),e.jsx("th",{children:"手机号"}),e.jsx("th",{children:"订阅状态"}),e.jsx("th",{children:"订阅到期时间"}),e.jsx("th",{children:"注册时间"}),e.jsx("th",{children:"操作"})]})}),e.jsx(lr,{children:r.length>0?r.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:n.id}),e.jsx("td",{children:n.username}),e.jsx("td",{children:n.bubbleId||"无"}),e.jsx("td",{children:n.nickname||"无"}),e.jsx("td",{children:n.phone}),e.jsx("td",{children:n.isSubscribed?`已订阅 (${n.subscriptionType==="monthly"?"月度":n.subscriptionType==="yearly"?"年度":n.subscriptionType==="trial"?"试用":"未知"})`:"未订阅"}),e.jsx("td",{children:n.isSubscribed&&n.subscriptionExpiryDate?S(n.subscriptionExpiryDate):"无"}),e.jsx("td",{children:S(n.createdAt)}),e.jsxs("td",{children:[e.jsx(Be,{$type:"primary",onClick:()=>j(n),children:"查看"}),e.jsx(Be,{$type:"danger",onClick:()=>_(n.id),children:"删除"})]})]},n.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:9,style:{textAlign:"center",padding:"30px 0"},children:"暂无数据"})})})]}),e.jsxs(pr,{children:[e.jsxs(fr,{children:[e.jsxs(xr,{children:[e.jsx("label",{children:"每页显示："}),e.jsx("select",{value:$,onChange:$e,children:J.map(n=>e.jsxs("option",{value:n,children:[n,"条"]},n))})]}),e.jsxs(hr,{children:["共 ",H," 条记录，当前第 ",k,"/",g," 页"]})]}),e.jsxs(ur,{children:[e.jsx(fe,{onClick:()=>ae(1),$disabled:k===1,children:"首页"}),e.jsx(fe,{onClick:()=>ae(k-1),$disabled:k===1,children:"上一页"}),Array.from({length:Math.min(5,g)},(n,o)=>{let l=Math.max(1,k-2),y=Math.min(g,l+4);l=Math.max(1,y-4);const m=l+o;return m<=g?e.jsx(fe,{onClick:()=>ae(m),$active:m===k,children:m},m):null}),e.jsx(fe,{onClick:()=>ae(k+1),$disabled:k===g,children:"下一页"}),e.jsx(fe,{onClick:()=>ae(g),$disabled:k===g,children:"末页"})]})]})]})]}),se&&i&&e.jsx(Ce,{onClick:()=>x(!1),children:e.jsxs(Qe,{onClick:n=>n.stopPropagation(),children:[e.jsxs(Se,{children:[e.jsx(De,{children:"用户详情"}),e.jsx(Ee,{onClick:()=>x(!1),children:"×"})]}),e.jsxs(jr,{children:[e.jsxs(O,{children:[e.jsx(W,{children:"用户ID"}),e.jsx(Y,{children:i.id})]}),e.jsxs(O,{children:[e.jsx(W,{children:"用户名"}),e.jsx(Y,{children:i.username})]}),e.jsxs(O,{children:[e.jsx(W,{children:"泡泡ID"}),e.jsx(Y,{children:i.bubbleId||"无"})]}),e.jsxs(O,{children:[e.jsx(W,{children:"昵称"}),e.jsx(Y,{children:i.nickname||"无"})]}),e.jsxs(O,{children:[e.jsx(W,{children:"手机号"}),e.jsx(Y,{children:i.phone})]}),e.jsxs(O,{children:[e.jsx(W,{children:"订阅状态"}),e.jsx(Y,{children:i.isSubscribed?`已订阅 (${i.subscriptionType==="monthly"?"月度":i.subscriptionType==="yearly"?"年度":i.subscriptionType==="trial"?"试用":"未知"})`:"未订阅"})]}),e.jsxs(O,{children:[e.jsx(W,{children:"订阅到期时间"}),e.jsx(Y,{children:i.isSubscribed&&i.subscriptionExpiryDate?S(i.subscriptionExpiryDate):"无"})]}),e.jsxs(O,{children:[e.jsx(W,{children:"注册时间"}),e.jsx(Y,{children:S(i.createdAt)})]}),e.jsxs(O,{children:[e.jsx(W,{children:"最后更新时间"}),e.jsx(Y,{children:S(i.updatedAt)})]})]}),e.jsxs(Ie,{children:[e.jsx(X,{type:"button",style:{background:"#67c23a",color:"white",marginRight:"auto",border:"none",outline:"none"},onClick:rr,children:"Copy"}),e.jsx(X,{type:"button",style:{background:"#409eff",color:"white"},onClick:A,children:"Update"})]})]})}),L&&i&&e.jsx(Ce,{onClick:()=>Z(!1),children:e.jsxs(Ve,{onClick:n=>n.stopPropagation(),children:[e.jsxs(Se,{children:[e.jsx(De,{children:"编辑用户"}),e.jsx(Ee,{onClick:()=>Z(!1),children:"×"})]}),e.jsxs("form",{onSubmit:er,children:[e.jsxs(D,{children:[e.jsx(T,{children:"用户ID"}),e.jsx(B,{type:"text",value:i.id,disabled:!0})]}),e.jsxs(D,{children:[e.jsx(T,{children:"用户名"}),e.jsx(B,{type:"text",value:i.username,disabled:!0})]}),e.jsxs(D,{children:[e.jsx(T,{children:"泡泡ID"}),e.jsx(B,{type:"text",name:"bubbleId",value:v.bubbleId,onChange:xe,placeholder:"请输入泡泡ID"})]}),e.jsxs(D,{children:[e.jsx(T,{children:"昵称"}),e.jsx(B,{type:"text",name:"nickname",value:v.nickname,onChange:xe,placeholder:"请输入昵称"})]}),e.jsx(D,{children:e.jsxs(Le,{children:[e.jsx(Re,{type:"checkbox",id:"isSubscribed",name:"isSubscribed",checked:v.isSubscribed,onChange:xe}),e.jsx(_e,{htmlFor:"isSubscribed",children:"已订阅"})]})}),v.isSubscribed&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(T,{children:"订阅类型"}),e.jsxs(Fe,{name:"subscriptionType",value:v.subscriptionType,onChange:xe,children:[e.jsx("option",{value:"monthly",children:"月度"}),e.jsx("option",{value:"yearly",children:"年度"}),e.jsx("option",{value:"trial",children:"试用"})]})]}),e.jsxs(D,{children:[e.jsx(T,{children:"订阅到期时间"}),e.jsx(He,{type:"date",name:"subscriptionExpiryDate",value:v.subscriptionExpiryDate,onChange:xe})]})]}),e.jsxs(Ie,{children:[e.jsx(X,{type:"button",style:{background:"#909399"},onClick:()=>Z(!1),disabled:ne,children:"取消"}),e.jsx(X,{type:"submit",style:{background:"#409eff",color:"white",opacity:ne?.7:1},disabled:ne,children:ne?"保存中...":"保存更改"})]})]})]})}),je&&e.jsx(Ce,{onClick:()=>oe(!1),children:e.jsxs(Ve,{onClick:n=>n.stopPropagation(),children:[e.jsxs(Se,{children:[e.jsx(De,{children:"新建用户"}),e.jsx(Ee,{onClick:()=>oe(!1),children:"×"})]}),e.jsxs("form",{onSubmit:tr,children:[e.jsxs(D,{children:[e.jsxs(T,{children:["手机号码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"text",name:"phone",value:c.phone,onChange:N,placeholder:"请输入手机号码",autoComplete:"off"}),b.phone&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:b.phone})]}),e.jsxs(D,{children:[e.jsxs(T,{children:["用户名 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"text",name:"username",value:c.username,onChange:N,placeholder:"请输入用户名，必须以字母或下划线开头",autoComplete:"off"}),b.username&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:b.username})]}),e.jsxs(D,{children:[e.jsxs(T,{children:["密码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"password",name:"password",value:c.password,onChange:N,placeholder:"请输入密码",autoComplete:"new-password"}),b.password&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:b.password})]}),e.jsxs(D,{children:[e.jsxs(T,{children:["确认密码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"password",name:"confirmPassword",value:c.confirmPassword,onChange:N,placeholder:"请再次输入密码",autoComplete:"new-password"}),b.confirmPassword&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:b.confirmPassword})]}),e.jsxs(D,{children:[e.jsxs(T,{children:["昵称 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"text",name:"nickname",value:c.nickname,onChange:N,placeholder:"请输入昵称",autoComplete:"off"})]}),e.jsxs(D,{children:[e.jsxs(T,{children:["泡泡ID ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(B,{type:"text",name:"bubbleId",value:c.bubbleId,onChange:N,placeholder:"请输入泡泡ID",autoComplete:"off"}),b.bubbleId&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:b.bubbleId})]}),e.jsx(D,{children:e.jsxs(Le,{children:[e.jsx(Re,{type:"checkbox",id:"createIsSubscribed",name:"isSubscribed",checked:c.isSubscribed,onChange:N}),e.jsx(_e,{htmlFor:"createIsSubscribed",children:"已订阅"})]})}),c.isSubscribed&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(T,{children:"订阅类型"}),e.jsxs(Fe,{name:"subscriptionType",value:c.subscriptionType,onChange:N,children:[e.jsx("option",{value:"monthly",children:"月度"}),e.jsx("option",{value:"yearly",children:"年度"}),e.jsx("option",{value:"trial",children:"试用"})]})]}),e.jsxs(D,{children:[e.jsx(T,{children:"订阅到期时间"}),e.jsx(He,{type:"date",name:"subscriptionExpiryDate",value:c.subscriptionExpiryDate,onChange:N})]})]}),e.jsxs(Ie,{children:[e.jsx(X,{type:"button",style:{background:"#909399"},onClick:()=>oe(!1),disabled:de,children:"取消"}),e.jsx(X,{type:"submit",style:{background:"#67c23a",color:"white",opacity:de?.7:1},disabled:de,children:de?"创建中...":"创建用户"})]})]})]})})]})},kr="https://www.bubbledogs.top",le=Je.create({baseURL:kr,timeout:1e4});le.interceptors.request.use(r=>{const s=I.userData;if(!s||!s.access_token)throw new Error("未找到认证信息，请重新登录");return r.headers&&(r.headers.Authorization=`Bearer ${s.access_token}`,r.headers["Content-Type"]="application/json; charset=utf-8"),r},r=>Promise.reject(r));le.interceptors.response.use(r=>r,r=>{var s;if(r.response){const u=r.response.status;if(u===401)throw localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),new Error("认证已过期，请重新登录");if(u===403)throw new Error("没有权限执行此操作");const P=((s=r.response.data)==null?void 0:s.message)||"请求失败";throw new Error(P)}throw r.request?new Error("网络连接失败，请检查网络设置"):new Error("发生未知错误，请稍后重试")});const Ne={getVoiceList:async r=>{try{const s=await le.post("/api/admin/voices/list",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"获取音色列表失败")}catch(s){throw s instanceof Error?s:new Error("获取音色列表失败")}},getVoiceDetail:async r=>{try{const s=await le.get("/api/admin/voices/detail",{params:r});if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"获取音色详情失败")}catch(s){throw s instanceof Error?s:new Error("获取音色详情失败")}},updateVoice:async r=>{try{const s=await le.post("/api/admin/voices/update",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"更新音色信息失败")}catch(s){throw s instanceof Error?s:new Error("更新音色信息失败")}},deleteVoice:async r=>{try{const s=await le.post("/api/admin/voices/delete",null,{params:{id:r.id,username:r.username}});if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"删除音色失败")}catch(s){throw s instanceof Error?s:new Error("删除音色失败")}}},wr=t.div`
  padding: 20px;
`,vr=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,$r=t.h2`
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Cr=t.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.85)":"#606266"};
`,Sr=t.thead`
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
  
  th {
    padding: 15px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,Dr=t.tbody`
  tr {
    &:hover {
      background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
    }
  }
  
  td {
    padding: 15px;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,Er=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Ir=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 15px;
  
  label {
    color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
    font-size: 14px;
  }
  
  select {
    padding: 6px 10px;
    border-radius: 20px;
    border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
    background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
`,zr=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Tr=t.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,Pr=t.div`
  display: flex;
  gap: 10px;
`,he=t.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${({$active:r,theme:s})=>r?"#409eff":s.mode==="dark"?"#252525":"#f5f7fa"};
  color: ${({$active:r,theme:s})=>r?"#ffffff":s.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  opacity: ${({$disabled:r})=>r?.6:1};
  
  &:hover {
    background: ${({$active:r,$disabled:s,theme:u})=>s?r?"#409eff":u.mode==="dark"?"#252525":"#f5f7fa":r?"#66b1ff":u.mode==="dark"?"#333":"#e6e6e6"};
  }
`,Oe=t.button`
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  background: ${({$type:r})=>r==="primary"?"#409eff":r==="danger"?"#f56c6c":"#909399"};
  color: white;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: ${({$type:r})=>r==="primary"?"#66b1ff":r==="danger"?"#f78989":"#a6a9ad"};
  }
`,Mr=t.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,We=t.input`
  padding: 10px 15px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
  border-radius: 20px;
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
  flex: 1;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
  }
`,ge=t.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #409eff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: #66b1ff;
  }
`,Ar=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Ur=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 12px;
  padding: 25px;
  width: 550px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  
  /* 隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`,Br=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,Vr=t.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Fr=t.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#909399"};
  
  &:hover {
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  }
`,Lr=t.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`,q=t.div`
  margin-bottom: 5px;
  background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.02)"};
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  }
`,G=t.div`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.5)":"#909399"};
  margin-bottom: 6px;
`,K=t.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-weight: 500;
`,Rr=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,_r=t(ge)`
  background: #409eff;
  &:hover {
    background: #66b1ff;
  }
`,Hr=t.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#dcdfe6"};
  border-radius: 8px;
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#606266"};
  font-size: 16px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #409eff;
  }
`,Nr=()=>{const{theme:r}=Me(),[s,u]=d.useState([]),[P,k]=d.useState(!0),[h,$]=d.useState(1),[E,g]=d.useState(10),[z,H]=d.useState(1),[V,F]=d.useState(0),[M,i]=d.useState(""),[f,se]=d.useState(null),[x,w]=d.useState(!1),[C,L]=d.useState(!1),[Z,v]=d.useState(""),[te,ne]=d.useState(""),[ie,je]=d.useState("active"),oe=[10,20,50,100],c=async(a=1,j=E,_="")=>{try{k(!0);const S=I.userData;if(!S||!S.username){p.error("无法获取当前用户信息");return}const A=await be.getAdminVoicesList({username:S.username,page:a,pageSize:j,searchTerm:_||void 0});u(A.voices),H(A.totalPages),F(A.total),$(A.currentPage),g(A.pageSize)}catch(S){console.error("加载音色数据失败:",S),p.error("加载音色数据失败，请稍后重试")}finally{k(!1)}};d.useEffect(()=>{c(h,E)},[]);const R=a=>{a<1||a>z||($(a),c(a,E,M))},de=a=>{const j=Number(a.target.value);g(j),$(1),c(1,j,M)},ce=()=>{$(1),c(1,E,M)},b=a=>{se(a),w(!0)},U=async a=>{if(window.confirm("确定要删除该音色吗？此操作不可恢复"))try{const j=I.userData;if(!j||!j.username){p.error("无法获取当前用户信息");return}const _=await Ne.deleteVoice({id:a,username:j.username});_.success?(p.success("音色已成功删除"),c(h,E,M)):p.error(_.message||"删除音色失败")}catch(j){console.error("删除音色失败:",j),p.error(j.message||"删除音色失败，请稍后重试")}},J=a=>a?new Date(a).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"无",Q=()=>{if(!f)return;const a=`
泡泡音色信息
-------------------
音色ID: ${f.id}
用户ID: ${f.userId}
音色标识: ${f.voiceId}
前缀: ${f.prefix}
音色名称: ${f.name||"无"}
状态: ${f.status}
创建时间: ${J(f.createTime)}
最后使用时间: ${J(f.lastUsedTime)}
用户提示: ${f.userPrompt||"无"}
-------------------
`.trim();navigator.clipboard.writeText(a).then(()=>{p.success("音色信息已复制到剪贴板")}).catch(j=>{console.error("复制到剪贴板失败:",j),p.error("复制到剪贴板失败")})},ae=()=>{f&&(v(f.name||""),ne(f.userPrompt||""),je(f.status),L(!0))},$e=async()=>{if(f)try{const a=I.userData;if(!a||!a.username){p.error("无法获取当前用户信息");return}const j=await Ne.updateVoice({id:f.id,username:a.username,name:Z,userPrompt:te,status:ie});p.success("音色信息更新成功"),se(j),L(!1),c(h,E,M)}catch(a){p.error(a.message||"更新音色信息失败")}};return e.jsxs(wr,{children:[e.jsxs(vr,{children:[e.jsx($r,{children:"音色管理"}),e.jsxs(Mr,{children:[e.jsx(We,{placeholder:"搜索音色ID、名称或用户ID",value:M,onChange:a=>i(a.target.value),onKeyPress:a=>a.key==="Enter"&&ce()}),e.jsx(ge,{onClick:ce,children:"搜索"})]}),P?e.jsx("div",{style:{padding:"20px 0",textAlign:"center"},children:"加载中..."}):e.jsxs(e.Fragment,{children:[e.jsxs(Cr,{children:[e.jsx(Sr,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"用户ID"}),e.jsx("th",{children:"音色标识"}),e.jsx("th",{children:"前缀"}),e.jsx("th",{children:"音色名称"}),e.jsx("th",{children:"状态"}),e.jsx("th",{children:"创建时间"}),e.jsx("th",{children:"最后使用时间"}),e.jsx("th",{children:"操作"})]})}),e.jsx(Dr,{children:s.length>0?s.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.userId}),e.jsx("td",{children:a.voiceId}),e.jsx("td",{children:a.prefix}),e.jsx("td",{children:a.name||"无"}),e.jsx("td",{children:a.status}),e.jsx("td",{children:J(a.createTime)}),e.jsx("td",{children:J(a.lastUsedTime)}),e.jsxs("td",{children:[e.jsx(Oe,{$type:"primary",onClick:()=>b(a),children:"查看"}),e.jsx(Oe,{$type:"danger",onClick:()=>U(a.id),children:"删除"})]})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:9,style:{textAlign:"center",padding:"30px 0"},children:"暂无数据"})})})]}),e.jsxs(Er,{children:[e.jsxs(zr,{children:[e.jsxs(Ir,{children:[e.jsx("label",{children:"每页显示："}),e.jsx("select",{value:E,onChange:de,children:oe.map(a=>e.jsxs("option",{value:a,children:[a,"条"]},a))})]}),e.jsxs(Tr,{children:["共 ",V," 条记录，当前第 ",h,"/",z," 页"]})]}),e.jsxs(Pr,{children:[e.jsx(he,{onClick:()=>R(1),$disabled:h===1,children:"首页"}),e.jsx(he,{onClick:()=>R(h-1),$disabled:h===1,children:"上一页"}),Array.from({length:Math.min(5,z)},(a,j)=>{let _=Math.max(1,h-2),S=Math.min(z,_+4);_=Math.max(1,S-4);const A=_+j;return A<=z?e.jsx(he,{onClick:()=>R(A),$active:A===h,children:A},A):null}),e.jsx(he,{onClick:()=>R(h+1),$disabled:h===z,children:"下一页"}),e.jsx(he,{onClick:()=>R(z),$disabled:h===z,children:"末页"})]})]})]})]}),x&&f&&e.jsx(Ar,{onClick:()=>w(!1),children:e.jsxs(Ur,{onClick:a=>a.stopPropagation(),children:[e.jsxs(Br,{children:[e.jsx(Vr,{children:"音色详情"}),e.jsx(Fr,{onClick:()=>{w(!1),L(!1)},children:"×"})]}),C?e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"音色名称"}),e.jsx(We,{value:Z,onChange:a=>v(a.target.value),placeholder:"请输入音色名称"})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"提示词"}),e.jsx(Hr,{value:te,onChange:a=>ne(a.target.value),placeholder:"请输入提示词"})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"状态"}),e.jsxs("select",{value:ie,onChange:a=>je(a.target.value),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #dcdfe6",background:r==="dark"?"#252525":"#ffffff",color:r==="dark"?"#ffffff":"#606266"},children:[e.jsx("option",{value:"active",children:"启用"}),e.jsx("option",{value:"inactive",children:"禁用"})]})]})]}):e.jsxs(Lr,{children:[e.jsxs(q,{children:[e.jsx(G,{children:"音色ID"}),e.jsx(K,{children:f.id})]}),e.jsxs(q,{children:[e.jsx(G,{children:"用户ID"}),e.jsx(K,{children:f.userId})]}),e.jsxs(q,{children:[e.jsx(G,{children:"音色标识"}),e.jsx(K,{children:f.voiceId})]}),e.jsxs(q,{children:[e.jsx(G,{children:"前缀"}),e.jsx(K,{children:f.prefix})]}),e.jsxs(q,{children:[e.jsx(G,{children:"音色名称"}),e.jsx(K,{children:f.name||"无"})]}),e.jsxs(q,{children:[e.jsx(G,{children:"状态"}),e.jsx(K,{children:f.status})]}),e.jsxs(q,{children:[e.jsx(G,{children:"创建时间"}),e.jsx(K,{children:J(f.createTime)})]}),e.jsxs(q,{children:[e.jsx(G,{children:"最后使用时间"}),e.jsx(K,{children:J(f.lastUsedTime)})]}),e.jsxs(q,{children:[e.jsx(G,{children:"用户提示"}),e.jsx(K,{children:f.userPrompt||"无"})]})]}),e.jsx(Rr,{children:C?e.jsxs(e.Fragment,{children:[e.jsx(ge,{onClick:()=>L(!1),style:{background:"#909399"},children:"取消"}),e.jsx(ge,{onClick:$e,style:{background:"#409eff"},children:"保存"})]}):e.jsxs(e.Fragment,{children:[e.jsx(ge,{type:"button",style:{background:"#67c23a",color:"white",border:"none",outline:"none"},onClick:Q,children:"Copy"}),e.jsx(_r,{onClick:ae,children:"修改"})]})})]})})]})},Or="https://www.bubbledogs.top",pe=Je.create({baseURL:Or,timeout:1e4});pe.interceptors.request.use(r=>{const s=I.userData;if(!s||!s.access_token)throw new Error("未找到认证信息，请重新登录");return r.headers&&(r.headers.Authorization=`Bearer ${s.access_token}`,r.headers["Content-Type"]="application/json; charset=utf-8"),r},r=>Promise.reject(r));pe.interceptors.response.use(r=>r,r=>{var s;if(r.response){const u=r.response.status;if(u===401)throw localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),new Error("认证已过期，请重新登录");if(u===403)throw new Error("没有权限执行此操作");const P=((s=r.response.data)==null?void 0:s.message)||"请求失败";throw new Error(P)}throw r.request?new Error("网络连接失败，请检查网络设置"):new Error("发生未知错误，请稍后重试")});const ye={createRedeemCodes:async r=>{try{const s=await pe.post("/api/admin/redeem-codes/create",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"创建兑换码失败")}catch(s){throw s instanceof Error?s:new Error("创建兑换码失败")}},deleteRedeemCode:async r=>{try{const s=await pe.post("/api/admin/redeem-codes/delete",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"删除兑换码失败")}catch(s){throw s instanceof Error?s:new Error("删除兑换码失败")}},updateRedeemCode:async r=>{try{const s=await pe.post("/api/admin/redeem-codes/update",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"更新兑换码失败")}catch(s){throw s instanceof Error?s:new Error("更新兑换码失败")}},getRedeemCodeList:async r=>{try{const s=await pe.post("/api/admin/redeem-codes/list",r);if(s.data.code===200)return s.data.data;throw new Error(s.data.message||"获取兑换码列表失败")}catch(s){throw s instanceof Error?s:new Error("获取兑换码列表失败")}}},Wr=t.div`
  padding: 20px;
`,Ye=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,qe=t.h2`
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Yr=t.form`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: flex-end;
`,Ge=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ke=t.label`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,qr=t.select`
  padding: 8px 12px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#dcdfe6"};
  border-radius: 4px;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-size: 14px;
  min-width: 120px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
  }
`,Gr=t.input`
  padding: 8px 12px;
  border: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#dcdfe6"};
  border-radius: 4px;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#ffffff"};
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-size: 14px;
  width: 100px;
  
  &:focus {
    outline: none;
    border-color: #409eff;
  }
`,Kr=t.button`
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #66b1ff;
  }
  
  &:disabled {
    background: #a0cfff;
    cursor: not-allowed;
  }
`,Zr=t.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`,ee=t.th`
  padding: 12px;
  text-align: left;
  background: ${({theme:r})=>r.mode==="dark"?"#1a1a1a":"#f5f7fa"};
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#ebeef5"};
`,re=t.td`
  padding: 12px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#ebeef5"};
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  font-size: 14px;
`,ze=t.button`
  padding: 4px 8px;
  background: ${({$type:r})=>r==="danger"?"#f56c6c":"#409eff"};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;
  transition: all 0.3s;
  
  &:hover {
    background: ${({$type:r})=>r==="danger"?"#f78989":"#66b1ff"};
  }
  
  &:last-child {
    margin-right: 0;
  }
`,Jr=t.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`,Ze=t.button`
  padding: 4px 12px;
  background: ${({$active:r})=>r?"#409eff":"transparent"};
  color: ${({$active:r,theme:s})=>r?"white":s.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  border: 1px solid ${({$active:r})=>r?"#409eff":"#dcdfe6"};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${({$active:r})=>r?"#66b1ff":"#f5f7fa"};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Qr=()=>{const[r,s]=d.useState("yearly"),[u,P]=d.useState(1),[k,h]=d.useState(!1),[$,E]=d.useState([]),[g,z]=d.useState(1),[H]=d.useState(10),[V,F]=d.useState(0),M=async()=>{var x;try{h(!0);const w=await ye.getRedeemCodeList({username:((x=I.userData)==null?void 0:x.username)||"",page:g,pageSize:H});E(w.redeemCodes),F(w.total)}catch(w){w instanceof Error&&p.error(w.message)}finally{h(!1)}},i=async x=>{var w;x.preventDefault();try{h(!0);const C=await ye.createRedeemCodes({username:((w=I.userData)==null?void 0:w.username)||"",type:r,count:u});p.success(C.message),M()}catch(C){C instanceof Error&&p.error(C.message)}finally{h(!1)}},f=async x=>{var w;if(window.confirm("确定要删除这个兑换码吗？"))try{h(!0);const C=await ye.deleteRedeemCode({username:((w=I.userData)==null?void 0:w.username)||"",id:x});p.success(C.message),M()}catch(C){C instanceof Error&&p.error(C.message)}finally{h(!1)}},se=async(x,w)=>{var C;try{h(!0);const L=await ye.updateRedeemCode({username:((C=I.userData)==null?void 0:C.username)||"",id:x,status:w});p.success("更新状态成功"),M()}catch(L){L instanceof Error&&p.error(L.message)}finally{h(!1)}};return d.useEffect(()=>{M()},[g]),e.jsxs(Wr,{children:[e.jsxs(Ye,{children:[e.jsx(qe,{children:"创建兑换码"}),e.jsxs(Yr,{onSubmit:i,children:[e.jsxs(Ge,{children:[e.jsx(Ke,{children:"类型"}),e.jsxs(qr,{value:r,onChange:x=>s(x.target.value),children:[e.jsx("option",{value:"yearly",children:"年度会员"}),e.jsx("option",{value:"monthly",children:"月度会员"})]})]}),e.jsxs(Ge,{children:[e.jsx(Ke,{children:"数量"}),e.jsx(Gr,{type:"number",min:"1",max:"100",value:u,onChange:x=>P(parseInt(x.target.value))})]}),e.jsx(Kr,{type:"submit",disabled:k,children:k?"创建中...":"创建兑换码"})]})]}),e.jsxs(Ye,{children:[e.jsx(qe,{children:"兑换码列表"}),e.jsxs(Zr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(ee,{children:"ID"}),e.jsx(ee,{children:"兑换码"}),e.jsx(ee,{children:"类型"}),e.jsx(ee,{children:"状态"}),e.jsx(ee,{children:"创建时间"}),e.jsx(ee,{children:"使用者"}),e.jsx(ee,{children:"使用时间"}),e.jsx(ee,{children:"操作"})]})}),e.jsx("tbody",{children:$.map(x=>e.jsxs("tr",{children:[e.jsx(re,{children:x.id}),e.jsx(re,{children:x.code}),e.jsx(re,{children:x.type==="yearly"?"年度会员":"月度会员"}),e.jsx(re,{children:x.statusDesc}),e.jsx(re,{children:new Date(x.createdAt).toLocaleString()}),e.jsx(re,{children:x.usedBy||"-"}),e.jsx(re,{children:x.usedAt?new Date(x.usedAt).toLocaleString():"-"}),e.jsxs(re,{children:[x.status===0&&e.jsx(ze,{onClick:()=>se(x.id,2),children:"禁用"}),x.status===2&&e.jsx(ze,{onClick:()=>se(x.id,0),children:"启用"}),e.jsx(ze,{$type:"danger",onClick:()=>f(x.id),children:"删除"})]})]},x.id))})]}),e.jsxs(Jr,{children:[e.jsx(Ze,{disabled:g===1,onClick:()=>z(g-1),children:"上一页"}),e.jsx(Ze,{disabled:g*H>=V,onClick:()=>z(g+1),children:"下一页"})]})]})]})},Xr=t.div`
  display: flex;
  min-height: 100vh;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#f5f7fa"};
`,es=t.div`
  width: 260px;
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  box-shadow: ${({theme:r})=>r.mode==="dark"?"1px 0 5px rgba(0,0,0,0.2)":"1px 0 5px rgba(0,0,0,0.05)"};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  border-radius: 0 8px 8px 0;
`,rs=t.div`
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#2a2a2a":"#ebeef5"};
`,ss=t.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  position: relative;
  display: flex;
  align-items: center;
`,ts=t.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  flex-grow: 1;
`,ue=t.li`
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 8px 12px 8px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    color: ${({theme:r,$active:s})=>s?"#409eff":r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
    background: ${({$active:r,theme:s})=>r?s.mode==="dark"?"rgba(64, 158, 255, 0.1)":"#ecf5ff":"transparent"};
    text-decoration: none;
    transition: all 0.2s;
    border-radius: 8px;
    
    &:hover {
      color: ${({theme:r,$active:s})=>s?"#409eff":r.mode==="dark"?"#ffffff":"#303133"};
      background: ${({theme:r,$active:s})=>s?r.mode==="dark"?"rgba(64, 158, 255, 0.15)":"#ecf5ff":r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"#f5f7fa"};
    }
  }
`,me=t.span`
  font-size: 20px;
  font-weight: 600;
`,ns=t.div`
  padding: 12px 20px;
  border-top: none;
  display: flex;
  justify-content: center;
`,os=t.button`
  background: linear-gradient(135deg, #409eff 0%, #2b88e6 100%);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: linear-gradient(135deg, #66b1ff 0%, #409eff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,as=t.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#f5f7fa"};
`;t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
  margin-bottom: 20px;
`;t.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`;t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;t.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #409eff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;t.span`
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.8)":"#606266"};
  font-weight: 500;
  font-size: 15px;
`;const Te=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
  transition: all 0.3s;
  
  p {
    margin: 0;
    line-height: 1.6;
    color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
    font-size: 15px;
    font-weight: 500;
  }
`,Pe=t.h2`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 18px;
    height: 18px;
    color: #409eff;
  }
`,is=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`,ke=t.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({theme:r})=>r.mode==="dark"?"0 4px 16px 0 rgba(0,0,0,0.2)":"0 4px 16px 0 rgba(0,0,0,0.1)"};
    transform: translateY(-2px);
  }
`,we=t.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.6)":"#909399"};
  margin-bottom: 12px;
`,ve=t.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Xe=t.button`
  border: none;
  border-radius: 20px; /* 最大圆角 */
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 16px;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,ds=t(Xe)`
  background: #409eff;
  color: white;
  
  &:hover {
    background: #66b1ff;
  }
  
  &:active {
    background: #3a8ee6;
  }
`,cs=t(Xe)`
  background: #f56c6c;
  color: white;
  
  &:hover {
    background: #f78989;
  }
  
  &:active {
    background: #dd6161;
  }
`,ls=()=>e.jsxs(e.Fragment,{children:[e.jsxs(is,{children:[e.jsxs(ke,{children:[e.jsx(we,{children:"总用户数"}),e.jsx(ve,{children:"1,234"})]}),e.jsxs(ke,{children:[e.jsx(we,{children:"今日活跃用户"}),e.jsx(ve,{children:"258"})]}),e.jsxs(ke,{children:[e.jsx(we,{children:"总音色数"}),e.jsx(ve,{children:"5,678"})]}),e.jsxs(ke,{children:[e.jsx(we,{children:"今日新增音色"}),e.jsx(ve,{children:"47"})]})]}),e.jsxs(Te,{children:[e.jsxs(Pe,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M21 13.255A23.931 23.931 0 0112 15a23.931 23.931 0 01-9-1.745V8.5a2 2 0 012-2h14a2 2 0 012 2v4.755z"}),e.jsx("path",{d:"M3 18.5V8.5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"})]}),"系统概览"]}),e.jsx("p",{children:"欢迎来到泡泡后台。这里可以管理用户、音色和系统设置。"})]}),e.jsxs(Te,{children:[e.jsxs(Pe,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),"系统信息"]}),e.jsxs("div",{style:{fontSize:"15px",lineHeight:"1.8",color:"inherit",fontWeight:500},children:[e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("span",{style:{display:"inline-block",width:"100px",marginRight:"8px",color:"inherit",opacity:.8},children:"服务器状态："}),e.jsx("span",{style:{color:"#67c23a",fontWeight:600},children:"运行中"})]}),e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("span",{style:{display:"inline-block",width:"100px",marginRight:"8px",color:"inherit",opacity:.8},children:"系统版本："}),e.jsx("span",{style:{fontWeight:600},children:"v1.0.0"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"100px",marginRight:"8px",color:"inherit",opacity:.8},children:"上次更新："}),e.jsx("span",{style:{fontWeight:600},children:"2023年12月15日"})]})]})]})]}),ps=()=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsxs(Pe,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),"系统设置"]}),e.jsx("p",{children:"这里将显示系统设置功能，包括基本设置、安全设置、通知设置等。"}),e.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"16px"},children:[e.jsx(ds,{children:"保存设置"}),e.jsx(cs,{children:"重置设置"})]})]})}),fs=()=>{const[r,s]=d.useState("dashboard"),u=nr(),{theme:P}=Me(),[k,h]=d.useState(null),[$,E]=d.useState(!0);d.useEffect(()=>{(async()=>{try{if(E(!0),!I.forceRefreshLoginStatus()){p.error("请先登录"),u("/login");return}const V=await I.refreshUserInfo();if(h(V),V.username!=="chenming2"&&V.username!=="BubbleWukon"&&V.username!=="blacksoup"){p.error("没有管理员权限"),u("/");return}}catch(H){console.error("权限检查失败:",H),p.error("权限检查失败"),u("/")}finally{E(!1)}})()},[u]);const g=()=>{switch(r){case"dashboard":return e.jsx(ls,{});case"users":return e.jsx(yr,{});case"voices":return e.jsx(Nr,{});case"codes":return e.jsx(Qr,{});case"settings":return e.jsx(ps,{});default:return e.jsx("div",{children:"请选择功能"})}};return $?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:P==="dark"?"#141414":"#f5f7fa",color:P==="dark"?"#909399":"#606266"},children:"加载中..."}):e.jsxs(Xr,{children:[e.jsxs(es,{children:[e.jsx(rs,{children:e.jsx(ss,{children:"泡泡后台"})}),e.jsxs(ts,{children:[e.jsx(ue,{$active:r==="dashboard",onClick:()=>s("dashboard"),children:e.jsx("a",{children:e.jsx(me,{children:"仪表盘"})})}),e.jsx(ue,{$active:r==="users",onClick:()=>s("users"),children:e.jsx("a",{children:e.jsx(me,{children:"用户管理"})})}),e.jsx(ue,{$active:r==="voices",onClick:()=>s("voices"),children:e.jsx("a",{children:e.jsx(me,{children:"音色管理"})})}),e.jsx(ue,{$active:r==="codes",onClick:()=>s("codes"),children:e.jsx("a",{children:e.jsx(me,{children:"兑换码管理"})})}),e.jsx(ue,{$active:r==="settings",onClick:()=>s("settings"),children:e.jsx("a",{children:e.jsx(me,{children:"系统设置"})})})]}),e.jsx(ns,{children:e.jsx(os,{onClick:()=>u("/"),children:"返回前台"})})]}),e.jsx(as,{children:g()})]})};export{fs as default};
