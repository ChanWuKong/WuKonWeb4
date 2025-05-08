import{u as Ie,r as d,j as e,a as E,V as f,b as me,d as s,c as He,e as er}from"./index-BvolKKCj.js";const rr=s.div`
  padding: 20px;
`,tr=s.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,sr=s.h2`
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,nr=s.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.85)":"#606266"};
`,or=s.thead`
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
  
  th {
    padding: 15px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,ar=s.tbody`
  tr {
    &:hover {
      background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
    }
  }
  
  td {
    padding: 15px;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,ir=s.div`
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
`,dr=s.div`
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
`,cr=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,lr=s.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,fr=s.div`
  display: flex;
  gap: 10px;
`,xe=s.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${({$active:r,theme:t})=>r?"#409eff":t.mode==="dark"?"#252525":"#f5f7fa"};
  color: ${({$active:r,theme:t})=>r?"#ffffff":t.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  opacity: ${({$disabled:r})=>r?.6:1};
  
  &:hover {
    background: ${({$active:r,$disabled:t,theme:u})=>t?r?"#409eff":u.mode==="dark"?"#252525":"#f5f7fa":r?"#66b1ff":u.mode==="dark"?"#333":"#e6e6e6"};
  }
`,Pe=s.button`
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
`,pr=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
`,xr=s.div`
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 60%;
`,hr=s.input`
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
`,X=s.button`
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
`,we=s.div`
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
`,We=s.div`
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
`,$e=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,ve=s.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Ce=s.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#909399"};
  
  &:hover {
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  }
`,ur=s.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`,Y=s.div`
  margin-bottom: 5px;
  background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.02)"};
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  }
`,q=s.div`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.5)":"#909399"};
  margin-bottom: 6px;
`,H=s.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-weight: 500;
`,Se=s.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,Te=s(We)`
  max-width: 550px;
`,D=s.div`
  margin-bottom: 20px;
`,P=s.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,F=s.input`
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
`,Me=s.select`
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
`,Ue=s.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,Ae=s.input`
  margin-right: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`,Fe=s.label`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.8)":"#606266"};
  cursor: pointer;
`,Be=s(F)`
  /* 自定义日期输入框样式 */
`,br=()=>{Ie();const[r,t]=d.useState([]),[u,T]=d.useState(!0),[k,h]=d.useState(1),[v,I]=d.useState(10),[g,z]=d.useState(1),[N,B]=d.useState(0),[L,M]=d.useState(""),[i,x]=d.useState(null),[te,p]=d.useState(!1),[w,C]=d.useState(!1),[V,Z]=d.useState(!1),[$,se]=d.useState({nickname:"",bubbleId:"",isSubscribed:!1,subscriptionType:"",subscriptionExpiryDate:""}),[ne,ie]=d.useState(!1),[je,oe]=d.useState(!1),[c,R]=d.useState({phone:"",username:"",nickname:"",password:"",confirmPassword:"",isSubscribed:!1,subscriptionType:"monthly",subscriptionExpiryDate:new Date().toISOString().split("T")[0],bubbleId:""}),[de,ce]=d.useState(!1),[m,A]=d.useState({phone:"",username:"",password:"",confirmPassword:"",bubbleId:""}),J=[10,20,50,100],Q=async(n=1,o=v,l="")=>{try{T(!0);const y=E.userData;if(!y||!y.username){f.error("无法获取当前用户信息");return}const b=await me.getAdminUsersList({username:y.username,page:n,pageSize:o,searchTerm:l||void 0});t(b.users),z(b.totalPages),B(b.total),h(b.currentPage),I(b.pageSize)}catch(y){console.error("加载用户数据失败:",y),f.error("加载用户数据失败，请稍后重试")}finally{T(!1)}};d.useEffect(()=>{Q(k,v)},[]);const ae=n=>{n<1||n>g||(h(n),Q(n,v,L))},ke=n=>{const o=Number(n.target.value);I(o),h(1),Q(1,o,L)},a=()=>{h(1),Q(1,v,L)},j=n=>{x(n),p(!0)},_=async n=>{if(window.confirm("确定要删除该用户吗？此操作不可恢复"))try{const o=E.userData;if(!o||!o.username){f.error("无法获取当前用户信息");return}const l=await me.deleteAdminUser({adminUsername:o.username,userId:n});l.success?(f.success("用户已成功删除"),Q(k,v,L)):f.error(l.message||"删除用户失败")}catch(o){console.error("删除用户失败:",o),f.error(o.message||"删除用户失败，请稍后重试")}},S=n=>n?new Date(n).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"无",U=()=>{i&&(se({nickname:i.nickname||"",bubbleId:i.bubbleId||"",isSubscribed:i.isSubscribed,subscriptionType:i.subscriptionType||"monthly",subscriptionExpiryDate:i.subscriptionExpiryDate?new Date(i.subscriptionExpiryDate).toISOString().split("T")[0]:new Date().toISOString().split("T")[0]}),Z(!0))},pe=n=>{const{name:o,value:l,type:y}=n.target;if(y==="checkbox"){const b=n.target;se({...$,[o]:b.checked})}else se(o==="subscriptionType"?{...$,[o]:l,subscriptionExpiryDate:Ee(l)}:{...$,[o]:l})},Ze=async n=>{if(n.preventDefault(),!!i)try{ie(!0);const o=E.userData;if(!o||!o.username){f.error("无法获取当前用户信息"),ie(!1);return}const l={adminUsername:o.username,userId:i.id,userData:{nickname:$.nickname,bubbleId:$.bubbleId,isSubscribed:$.isSubscribed}};$.isSubscribed&&(l.userData.subscriptionType=$.subscriptionType,l.userData.subscriptionExpiryDate=$.subscriptionExpiryDate);const y=await me.editAdminUser(l);if(y.success){f.success("用户信息已成功更新");const b=r.map(ze=>ze.id===i.id?y.user:ze);t(b),i.id===y.user.id&&x(y.user),Z(!1)}else f.error(y.message||"更新用户信息失败")}catch(o){console.error("更新用户信息失败:",o),f.error(o.message||"更新用户信息失败，请稍后重试")}finally{ie(!1)}},Je=()=>{if(!i)return;const n=`
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
`.trim();navigator.clipboard.writeText(n).then(()=>{f.success("用户信息已复制到剪贴板")}).catch(o=>{console.error("复制到剪贴板失败:",o),f.error("复制到剪贴板失败")})},Ee=n=>{const o=new Date;let l=new Date(o);switch(n){case"monthly":l.setMonth(o.getMonth()+1);break;case"yearly":l.setFullYear(o.getFullYear()+1);break;case"trial":l.setDate(o.getDate()+7);break;default:l.setMonth(o.getMonth()+1)}return l.toISOString().split("T")[0]},O=n=>{const{name:o,value:l,type:y}=n.target;if(y==="checkbox"){const b=n.target;R({...c,[o]:b.checked})}else{if(R(o==="subscriptionType"?{...c,[o]:l,subscriptionExpiryDate:Ee(l)}:{...c,[o]:l}),m[o]&&A({...m,[o]:""}),o==="password"||o==="confirmPassword"){const b=o==="password"?c.confirmPassword:c.password;b&&l!==b?A({...m,confirmPassword:"两次输入的密码不一致"}):b&&l===b&&A({...m,confirmPassword:""})}o==="username"&&(l&&!/^[a-zA-Z_]/.test(l)?A({...m,username:"用户名必须以字母或下划线开头"}):A({...m,username:""})),o==="phone"&&(l&&!/^1[3-9]\d{9}$/.test(l)?A({...m,phone:"请输入有效的中国大陆手机号码"}):A({...m,phone:""}))}},Qe=()=>{let n=!0;const o={...m},l=/^1[3-9]\d{9}$/;c.phone?l.test(c.phone)?o.phone="":(o.phone="请输入有效的中国大陆手机号码",n=!1):(o.phone="手机号码为必填项",n=!1);const y=/^[a-zA-Z_]/;return c.username?y.test(c.username)?o.username="":(o.username="用户名必须以字母或下划线开头",n=!1):(o.username="用户名为必填项",n=!1),c.password?o.password="":(o.password="密码为必填项",n=!1),c.confirmPassword?c.password!==c.confirmPassword?(o.confirmPassword="两次输入的密码不一致",n=!1):o.confirmPassword="":(o.confirmPassword="请确认密码",n=!1),c.bubbleId?o.bubbleId="":(o.bubbleId="泡泡ID为必填项",n=!1),A(o),n},Xe=async n=>{if(n.preventDefault(),!!Qe())try{ce(!0);const o=E.userData;if(!o||!o.username){f.error("无法获取当前用户信息"),ce(!1);return}const l={adminUsername:o.username,phone:c.phone,username:c.username,password:c.password,nickname:c.nickname,bubbleId:c.bubbleId,isSubscribed:c.isSubscribed};c.isSubscribed&&(l.subscriptionType=c.subscriptionType,l.subscriptionExpiryDate=c.subscriptionExpiryDate);const y=await me.createAdminUser(l);f.success("用户创建成功"),Q(k,v,L),oe(!1),R({phone:"",username:"",nickname:"",password:"",confirmPassword:"",isSubscribed:!1,subscriptionType:"monthly",subscriptionExpiryDate:new Date().toISOString().split("T")[0],bubbleId:""}),A({phone:"",username:"",password:"",confirmPassword:"",bubbleId:""})}catch(o){console.error("创建用户失败:",o),f.error(o.message||"创建用户失败，请稍后重试")}finally{ce(!1)}};return e.jsxs(rr,{children:[e.jsxs(tr,{children:[e.jsx(sr,{children:"用户管理"}),e.jsxs(pr,{children:[e.jsxs(xr,{children:[e.jsx(hr,{placeholder:"搜索用户名、昵称或手机号",value:L,onChange:n=>M(n.target.value),onKeyPress:n=>n.key==="Enter"&&a()}),e.jsx(X,{onClick:a,children:"搜索"})]}),e.jsx(X,{onClick:()=>oe(!0),style:{background:"#67c23a",whiteSpace:"nowrap"},children:"新建用户"})]}),u?e.jsx("div",{style:{padding:"20px 0",textAlign:"center"},children:"加载中..."}):e.jsxs(e.Fragment,{children:[e.jsxs(nr,{children:[e.jsx(or,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"用户名"}),e.jsx("th",{children:"泡泡ID"}),e.jsx("th",{children:"昵称"}),e.jsx("th",{children:"手机号"}),e.jsx("th",{children:"订阅状态"}),e.jsx("th",{children:"订阅到期时间"}),e.jsx("th",{children:"注册时间"}),e.jsx("th",{children:"操作"})]})}),e.jsx(ar,{children:r.length>0?r.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:n.id}),e.jsx("td",{children:n.username}),e.jsx("td",{children:n.bubbleId||"无"}),e.jsx("td",{children:n.nickname||"无"}),e.jsx("td",{children:n.phone}),e.jsx("td",{children:n.isSubscribed?`已订阅 (${n.subscriptionType==="monthly"?"月度":n.subscriptionType==="yearly"?"年度":n.subscriptionType==="trial"?"试用":"未知"})`:"未订阅"}),e.jsx("td",{children:n.isSubscribed&&n.subscriptionExpiryDate?S(n.subscriptionExpiryDate):"无"}),e.jsx("td",{children:S(n.createdAt)}),e.jsxs("td",{children:[e.jsx(Pe,{$type:"primary",onClick:()=>j(n),children:"查看"}),e.jsx(Pe,{$type:"danger",onClick:()=>_(n.id),children:"删除"})]})]},n.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:9,style:{textAlign:"center",padding:"30px 0"},children:"暂无数据"})})})]}),e.jsxs(ir,{children:[e.jsxs(cr,{children:[e.jsxs(dr,{children:[e.jsx("label",{children:"每页显示："}),e.jsx("select",{value:v,onChange:ke,children:J.map(n=>e.jsxs("option",{value:n,children:[n,"条"]},n))})]}),e.jsxs(lr,{children:["共 ",N," 条记录，当前第 ",k,"/",g," 页"]})]}),e.jsxs(fr,{children:[e.jsx(xe,{onClick:()=>ae(1),$disabled:k===1,children:"首页"}),e.jsx(xe,{onClick:()=>ae(k-1),$disabled:k===1,children:"上一页"}),Array.from({length:Math.min(5,g)},(n,o)=>{let l=Math.max(1,k-2),y=Math.min(g,l+4);l=Math.max(1,y-4);const b=l+o;return b<=g?e.jsx(xe,{onClick:()=>ae(b),$active:b===k,children:b},b):null}),e.jsx(xe,{onClick:()=>ae(k+1),$disabled:k===g,children:"下一页"}),e.jsx(xe,{onClick:()=>ae(g),$disabled:k===g,children:"末页"})]})]})]})]}),te&&i&&e.jsx(we,{onClick:()=>p(!1),children:e.jsxs(We,{onClick:n=>n.stopPropagation(),children:[e.jsxs($e,{children:[e.jsx(ve,{children:"用户详情"}),e.jsx(Ce,{onClick:()=>p(!1),children:"×"})]}),e.jsxs(ur,{children:[e.jsxs(Y,{children:[e.jsx(q,{children:"用户ID"}),e.jsx(H,{children:i.id})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"用户名"}),e.jsx(H,{children:i.username})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"泡泡ID"}),e.jsx(H,{children:i.bubbleId||"无"})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"昵称"}),e.jsx(H,{children:i.nickname||"无"})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"手机号"}),e.jsx(H,{children:i.phone})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"订阅状态"}),e.jsx(H,{children:i.isSubscribed?`已订阅 (${i.subscriptionType==="monthly"?"月度":i.subscriptionType==="yearly"?"年度":i.subscriptionType==="trial"?"试用":"未知"})`:"未订阅"})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"订阅到期时间"}),e.jsx(H,{children:i.isSubscribed&&i.subscriptionExpiryDate?S(i.subscriptionExpiryDate):"无"})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"注册时间"}),e.jsx(H,{children:S(i.createdAt)})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"最后更新时间"}),e.jsx(H,{children:S(i.updatedAt)})]})]}),e.jsxs(Se,{children:[e.jsx(X,{type:"button",style:{background:"#67c23a",color:"white",marginRight:"auto",border:"none",outline:"none"},onClick:Je,children:"Copy"}),e.jsx(X,{type:"button",style:{background:"#409eff",color:"white"},onClick:U,children:"Update"})]})]})}),V&&i&&e.jsx(we,{onClick:()=>Z(!1),children:e.jsxs(Te,{onClick:n=>n.stopPropagation(),children:[e.jsxs($e,{children:[e.jsx(ve,{children:"编辑用户"}),e.jsx(Ce,{onClick:()=>Z(!1),children:"×"})]}),e.jsxs("form",{onSubmit:Ze,children:[e.jsxs(D,{children:[e.jsx(P,{children:"用户ID"}),e.jsx(F,{type:"text",value:i.id,disabled:!0})]}),e.jsxs(D,{children:[e.jsx(P,{children:"用户名"}),e.jsx(F,{type:"text",value:i.username,disabled:!0})]}),e.jsxs(D,{children:[e.jsx(P,{children:"泡泡ID"}),e.jsx(F,{type:"text",name:"bubbleId",value:$.bubbleId,onChange:pe,placeholder:"请输入泡泡ID"})]}),e.jsxs(D,{children:[e.jsx(P,{children:"昵称"}),e.jsx(F,{type:"text",name:"nickname",value:$.nickname,onChange:pe,placeholder:"请输入昵称"})]}),e.jsx(D,{children:e.jsxs(Ue,{children:[e.jsx(Ae,{type:"checkbox",id:"isSubscribed",name:"isSubscribed",checked:$.isSubscribed,onChange:pe}),e.jsx(Fe,{htmlFor:"isSubscribed",children:"已订阅"})]})}),$.isSubscribed&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(P,{children:"订阅类型"}),e.jsxs(Me,{name:"subscriptionType",value:$.subscriptionType,onChange:pe,children:[e.jsx("option",{value:"monthly",children:"月度"}),e.jsx("option",{value:"yearly",children:"年度"}),e.jsx("option",{value:"trial",children:"试用"})]})]}),e.jsxs(D,{children:[e.jsx(P,{children:"订阅到期时间"}),e.jsx(Be,{type:"date",name:"subscriptionExpiryDate",value:$.subscriptionExpiryDate,onChange:pe})]})]}),e.jsxs(Se,{children:[e.jsx(X,{type:"button",style:{background:"#909399"},onClick:()=>Z(!1),disabled:ne,children:"取消"}),e.jsx(X,{type:"submit",style:{background:"#409eff",color:"white",opacity:ne?.7:1},disabled:ne,children:ne?"保存中...":"保存更改"})]})]})]})}),je&&e.jsx(we,{onClick:()=>oe(!1),children:e.jsxs(Te,{onClick:n=>n.stopPropagation(),children:[e.jsxs($e,{children:[e.jsx(ve,{children:"新建用户"}),e.jsx(Ce,{onClick:()=>oe(!1),children:"×"})]}),e.jsxs("form",{onSubmit:Xe,children:[e.jsxs(D,{children:[e.jsxs(P,{children:["手机号码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"text",name:"phone",value:c.phone,onChange:O,placeholder:"请输入手机号码",autoComplete:"off"}),m.phone&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:m.phone})]}),e.jsxs(D,{children:[e.jsxs(P,{children:["用户名 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"text",name:"username",value:c.username,onChange:O,placeholder:"请输入用户名，必须以字母或下划线开头",autoComplete:"off"}),m.username&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:m.username})]}),e.jsxs(D,{children:[e.jsxs(P,{children:["密码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"password",name:"password",value:c.password,onChange:O,placeholder:"请输入密码",autoComplete:"new-password"}),m.password&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:m.password})]}),e.jsxs(D,{children:[e.jsxs(P,{children:["确认密码 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"password",name:"confirmPassword",value:c.confirmPassword,onChange:O,placeholder:"请再次输入密码",autoComplete:"new-password"}),m.confirmPassword&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:m.confirmPassword})]}),e.jsxs(D,{children:[e.jsxs(P,{children:["昵称 ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"text",name:"nickname",value:c.nickname,onChange:O,placeholder:"请输入昵称",autoComplete:"off"})]}),e.jsxs(D,{children:[e.jsxs(P,{children:["泡泡ID ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx(F,{type:"text",name:"bubbleId",value:c.bubbleId,onChange:O,placeholder:"请输入泡泡ID",autoComplete:"off"}),m.bubbleId&&e.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"5px"},children:m.bubbleId})]}),e.jsx(D,{children:e.jsxs(Ue,{children:[e.jsx(Ae,{type:"checkbox",id:"createIsSubscribed",name:"isSubscribed",checked:c.isSubscribed,onChange:O}),e.jsx(Fe,{htmlFor:"createIsSubscribed",children:"已订阅"})]})}),c.isSubscribed&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(P,{children:"订阅类型"}),e.jsxs(Me,{name:"subscriptionType",value:c.subscriptionType,onChange:O,children:[e.jsx("option",{value:"monthly",children:"月度"}),e.jsx("option",{value:"yearly",children:"年度"}),e.jsx("option",{value:"trial",children:"试用"})]})]}),e.jsxs(D,{children:[e.jsx(P,{children:"订阅到期时间"}),e.jsx(Be,{type:"date",name:"subscriptionExpiryDate",value:c.subscriptionExpiryDate,onChange:O})]})]}),e.jsxs(Se,{children:[e.jsx(X,{type:"button",style:{background:"#909399"},onClick:()=>oe(!1),disabled:de,children:"取消"}),e.jsx(X,{type:"submit",style:{background:"#67c23a",color:"white",opacity:de?.7:1},disabled:de,children:de?"创建中...":"创建用户"})]})]})]})})]})},mr="https://www.bubbledogs.top",le=He.create({baseURL:mr,timeout:1e4});le.interceptors.request.use(r=>{const t=E.userData;if(!t||!t.access_token)throw new Error("未找到认证信息，请重新登录");return r.headers&&(r.headers.Authorization=`Bearer ${t.access_token}`,r.headers["Content-Type"]="application/json; charset=utf-8"),r},r=>Promise.reject(r));le.interceptors.response.use(r=>r,r=>{var t;if(r.response){const u=r.response.status;if(u===401)throw localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),new Error("认证已过期，请重新登录");if(u===403)throw new Error("没有权限执行此操作");const T=((t=r.response.data)==null?void 0:t.message)||"请求失败";throw new Error(T)}throw r.request?new Error("网络连接失败，请检查网络设置"):new Error("发生未知错误，请稍后重试")});const Le={getVoiceList:async r=>{try{const t=await le.post("/api/admin/voices/list",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"获取音色列表失败")}catch(t){throw t instanceof Error?t:new Error("获取音色列表失败")}},getVoiceDetail:async r=>{try{const t=await le.get("/api/admin/voices/detail",{params:r});if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"获取音色详情失败")}catch(t){throw t instanceof Error?t:new Error("获取音色详情失败")}},updateVoice:async r=>{try{const t=await le.post("/api/admin/voices/update",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"更新音色信息失败")}catch(t){throw t instanceof Error?t:new Error("更新音色信息失败")}},deleteVoice:async r=>{try{const t=await le.post("/api/admin/voices/delete",null,{params:{id:r.id,username:r.username}});if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"删除音色失败")}catch(t){throw t instanceof Error?t:new Error("删除音色失败")}}},gr=s.div`
  padding: 20px;
`,jr=s.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,yr=s.h2`
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,kr=s.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.85)":"#606266"};
`,wr=s.thead`
  background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
  
  th {
    padding: 15px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,$r=s.tbody`
  tr {
    &:hover {
      background: ${({theme:r})=>r.mode==="dark"?"#252525":"#f5f7fa"};
    }
  }
  
  td {
    padding: 15px;
    border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
  }
`,vr=s.div`
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
`,Cr=s.div`
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
`,Sr=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Dr=s.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,Ir=s.div`
  display: flex;
  gap: 10px;
`,he=s.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${({$active:r,theme:t})=>r?"#409eff":t.mode==="dark"?"#252525":"#f5f7fa"};
  color: ${({$active:r,theme:t})=>r?"#ffffff":t.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  opacity: ${({$disabled:r})=>r?.6:1};
  
  &:hover {
    background: ${({$active:r,$disabled:t,theme:u})=>t?r?"#409eff":u.mode==="dark"?"#252525":"#f5f7fa":r?"#66b1ff":u.mode==="dark"?"#333":"#e6e6e6"};
  }
`,Ve=s.button`
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
`,Er=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Re=s.input`
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
`,ge=s.button`
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
`,zr=s.div`
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
`,Pr=s.div`
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
`,Tr=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,Mr=s.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Ur=s.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#909399"};
  
  &:hover {
    color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  }
`,Ar=s.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`,W=s.div`
  margin-bottom: 5px;
  background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.02)"};
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  }
`,G=s.div`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.5)":"#909399"};
  margin-bottom: 6px;
`,K=s.div`
  font-size: 16px;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  font-weight: 500;
`,Fr=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid ${({theme:r})=>r.mode==="dark"?"#333":"#ebeef5"};
`,Br=s(ge)`
  background: #409eff;
  &:hover {
    background: #66b1ff;
  }
`,Lr=s.textarea`
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
`,Vr=()=>{const{theme:r}=Ie(),[t,u]=d.useState([]),[T,k]=d.useState(!0),[h,v]=d.useState(1),[I,g]=d.useState(10),[z,N]=d.useState(1),[B,L]=d.useState(0),[M,i]=d.useState(""),[x,te]=d.useState(null),[p,w]=d.useState(!1),[C,V]=d.useState(!1),[Z,$]=d.useState(""),[se,ne]=d.useState(""),[ie,je]=d.useState("active"),oe=[10,20,50,100],c=async(a=1,j=I,_="")=>{try{k(!0);const S=E.userData;if(!S||!S.username){f.error("无法获取当前用户信息");return}const U=await me.getAdminVoicesList({username:S.username,page:a,pageSize:j,searchTerm:_||void 0});u(U.voices),N(U.totalPages),L(U.total),v(U.currentPage),g(U.pageSize)}catch(S){console.error("加载音色数据失败:",S),f.error("加载音色数据失败，请稍后重试")}finally{k(!1)}};d.useEffect(()=>{c(h,I)},[]);const R=a=>{a<1||a>z||(v(a),c(a,I,M))},de=a=>{const j=Number(a.target.value);g(j),v(1),c(1,j,M)},ce=()=>{v(1),c(1,I,M)},m=a=>{te(a),w(!0)},A=async a=>{if(window.confirm("确定要删除该音色吗？此操作不可恢复"))try{const j=E.userData;if(!j||!j.username){f.error("无法获取当前用户信息");return}const _=await Le.deleteVoice({id:a,username:j.username});_.success?(f.success("音色已成功删除"),c(h,I,M)):f.error(_.message||"删除音色失败")}catch(j){console.error("删除音色失败:",j),f.error(j.message||"删除音色失败，请稍后重试")}},J=a=>a?new Date(a).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"无",Q=()=>{if(!x)return;const a=`
泡泡音色信息
-------------------
音色ID: ${x.id}
用户ID: ${x.userId}
音色标识: ${x.voiceId}
前缀: ${x.prefix}
音色名称: ${x.name||"无"}
状态: ${x.status}
创建时间: ${J(x.createTime)}
最后使用时间: ${J(x.lastUsedTime)}
用户提示: ${x.userPrompt||"无"}
-------------------
`.trim();navigator.clipboard.writeText(a).then(()=>{f.success("音色信息已复制到剪贴板")}).catch(j=>{console.error("复制到剪贴板失败:",j),f.error("复制到剪贴板失败")})},ae=()=>{x&&($(x.name||""),ne(x.userPrompt||""),je(x.status),V(!0))},ke=async()=>{if(x)try{const a=E.userData;if(!a||!a.username){f.error("无法获取当前用户信息");return}const j=await Le.updateVoice({id:x.id,username:a.username,name:Z,userPrompt:se,status:ie});f.success("音色信息更新成功"),te(j),V(!1),c(h,I,M)}catch(a){f.error(a.message||"更新音色信息失败")}};return e.jsxs(gr,{children:[e.jsxs(jr,{children:[e.jsx(yr,{children:"音色管理"}),e.jsxs(Er,{children:[e.jsx(Re,{placeholder:"搜索音色ID、名称或用户ID",value:M,onChange:a=>i(a.target.value),onKeyPress:a=>a.key==="Enter"&&ce()}),e.jsx(ge,{onClick:ce,children:"搜索"})]}),T?e.jsx("div",{style:{padding:"20px 0",textAlign:"center"},children:"加载中..."}):e.jsxs(e.Fragment,{children:[e.jsxs(kr,{children:[e.jsx(wr,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"用户ID"}),e.jsx("th",{children:"音色标识"}),e.jsx("th",{children:"前缀"}),e.jsx("th",{children:"音色名称"}),e.jsx("th",{children:"状态"}),e.jsx("th",{children:"创建时间"}),e.jsx("th",{children:"最后使用时间"}),e.jsx("th",{children:"操作"})]})}),e.jsx($r,{children:t.length>0?t.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.userId}),e.jsx("td",{children:a.voiceId}),e.jsx("td",{children:a.prefix}),e.jsx("td",{children:a.name||"无"}),e.jsx("td",{children:a.status}),e.jsx("td",{children:J(a.createTime)}),e.jsx("td",{children:J(a.lastUsedTime)}),e.jsxs("td",{children:[e.jsx(Ve,{$type:"primary",onClick:()=>m(a),children:"查看"}),e.jsx(Ve,{$type:"danger",onClick:()=>A(a.id),children:"删除"})]})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:9,style:{textAlign:"center",padding:"30px 0"},children:"暂无数据"})})})]}),e.jsxs(vr,{children:[e.jsxs(Sr,{children:[e.jsxs(Cr,{children:[e.jsx("label",{children:"每页显示："}),e.jsx("select",{value:I,onChange:de,children:oe.map(a=>e.jsxs("option",{value:a,children:[a,"条"]},a))})]}),e.jsxs(Dr,{children:["共 ",B," 条记录，当前第 ",h,"/",z," 页"]})]}),e.jsxs(Ir,{children:[e.jsx(he,{onClick:()=>R(1),$disabled:h===1,children:"首页"}),e.jsx(he,{onClick:()=>R(h-1),$disabled:h===1,children:"上一页"}),Array.from({length:Math.min(5,z)},(a,j)=>{let _=Math.max(1,h-2),S=Math.min(z,_+4);_=Math.max(1,S-4);const U=_+j;return U<=z?e.jsx(he,{onClick:()=>R(U),$active:U===h,children:U},U):null}),e.jsx(he,{onClick:()=>R(h+1),$disabled:h===z,children:"下一页"}),e.jsx(he,{onClick:()=>R(z),$disabled:h===z,children:"末页"})]})]})]})]}),p&&x&&e.jsx(zr,{onClick:()=>w(!1),children:e.jsxs(Pr,{onClick:a=>a.stopPropagation(),children:[e.jsxs(Tr,{children:[e.jsx(Mr,{children:"音色详情"}),e.jsx(Ur,{onClick:()=>{w(!1),V(!1)},children:"×"})]}),C?e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"音色名称"}),e.jsx(Re,{value:Z,onChange:a=>$(a.target.value),placeholder:"请输入音色名称"})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"提示词"}),e.jsx(Lr,{value:se,onChange:a=>ne(a.target.value),placeholder:"请输入提示词"})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px",color:"inherit"},children:"状态"}),e.jsxs("select",{value:ie,onChange:a=>je(a.target.value),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #dcdfe6",background:r==="dark"?"#252525":"#ffffff",color:r==="dark"?"#ffffff":"#606266"},children:[e.jsx("option",{value:"active",children:"启用"}),e.jsx("option",{value:"inactive",children:"禁用"})]})]})]}):e.jsxs(Ar,{children:[e.jsxs(W,{children:[e.jsx(G,{children:"音色ID"}),e.jsx(K,{children:x.id})]}),e.jsxs(W,{children:[e.jsx(G,{children:"用户ID"}),e.jsx(K,{children:x.userId})]}),e.jsxs(W,{children:[e.jsx(G,{children:"音色标识"}),e.jsx(K,{children:x.voiceId})]}),e.jsxs(W,{children:[e.jsx(G,{children:"前缀"}),e.jsx(K,{children:x.prefix})]}),e.jsxs(W,{children:[e.jsx(G,{children:"音色名称"}),e.jsx(K,{children:x.name||"无"})]}),e.jsxs(W,{children:[e.jsx(G,{children:"状态"}),e.jsx(K,{children:x.status})]}),e.jsxs(W,{children:[e.jsx(G,{children:"创建时间"}),e.jsx(K,{children:J(x.createTime)})]}),e.jsxs(W,{children:[e.jsx(G,{children:"最后使用时间"}),e.jsx(K,{children:J(x.lastUsedTime)})]}),e.jsxs(W,{children:[e.jsx(G,{children:"用户提示"}),e.jsx(K,{children:x.userPrompt||"无"})]})]}),e.jsx(Fr,{children:C?e.jsxs(e.Fragment,{children:[e.jsx(ge,{onClick:()=>V(!1),style:{background:"#909399"},children:"取消"}),e.jsx(ge,{onClick:ke,style:{background:"#409eff"},children:"保存"})]}):e.jsxs(e.Fragment,{children:[e.jsx(ge,{type:"button",style:{background:"#67c23a",color:"white",border:"none",outline:"none"},onClick:Q,children:"Copy"}),e.jsx(Br,{onClick:ae,children:"修改"})]})})]})})]})},Rr="https://www.bubbledogs.top",fe=He.create({baseURL:Rr,timeout:1e4});fe.interceptors.request.use(r=>{const t=E.userData;if(!t||!t.access_token)throw new Error("未找到认证信息，请重新登录");return r.headers&&(r.headers.Authorization=`Bearer ${t.access_token}`,r.headers["Content-Type"]="application/json; charset=utf-8"),r},r=>Promise.reject(r));fe.interceptors.response.use(r=>r,r=>{var t;if(r.response){const u=r.response.status;if(u===401)throw localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),new Error("认证已过期，请重新登录");if(u===403)throw new Error("没有权限执行此操作");const T=((t=r.response.data)==null?void 0:t.message)||"请求失败";throw new Error(T)}throw r.request?new Error("网络连接失败，请检查网络设置"):new Error("发生未知错误，请稍后重试")});const ye={createRedeemCodes:async r=>{try{const t=await fe.post("/api/admin/redeem-codes/create",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"创建兑换码失败")}catch(t){throw t instanceof Error?t:new Error("创建兑换码失败")}},deleteRedeemCode:async r=>{try{const t=await fe.post("/api/admin/redeem-codes/delete",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"删除兑换码失败")}catch(t){throw t instanceof Error?t:new Error("删除兑换码失败")}},updateRedeemCode:async r=>{try{const t=await fe.post("/api/admin/redeem-codes/update",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"更新兑换码失败")}catch(t){throw t instanceof Error?t:new Error("更新兑换码失败")}},getRedeemCodeList:async r=>{try{const t=await fe.post("/api/admin/redeem-codes/list",r);if(t.data.code===200)return t.data.data;throw new Error(t.data.message||"获取兑换码列表失败")}catch(t){throw t instanceof Error?t:new Error("获取兑换码列表失败")}}},_r=s.div`
  padding: 20px;
`,_e=s.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
`,Ne=s.h2`
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`,Nr=s.form`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: flex-end;
`,Oe=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ye=s.label`
  font-size: 14px;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
`,Or=s.select`
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
`,Yr=s.input`
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
`,qr=s.button`
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
`,Hr=s.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`,ee=s.th`
  padding: 12px;
  text-align: left;
  background: ${({theme:r})=>r.mode==="dark"?"#1a1a1a":"#f5f7fa"};
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#ebeef5"};
`,re=s.td`
  padding: 12px;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#434343":"#ebeef5"};
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
  font-size: 14px;
`,De=s.button`
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
`,Wr=s.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`,qe=s.button`
  padding: 4px 12px;
  background: ${({$active:r})=>r?"#409eff":"transparent"};
  color: ${({$active:r,theme:t})=>r?"white":t.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
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
`,Gr=()=>{const[r,t]=d.useState("yearly"),[u,T]=d.useState(1),[k,h]=d.useState(!1),[v,I]=d.useState([]),[g,z]=d.useState(1),[N]=d.useState(10),[B,L]=d.useState(0),M=async()=>{var p;try{h(!0);const w=await ye.getRedeemCodeList({username:((p=E.userData)==null?void 0:p.username)||"",page:g,pageSize:N});I(w.redeemCodes),L(w.total)}catch(w){w instanceof Error&&f.error(w.message)}finally{h(!1)}},i=async p=>{var w;p.preventDefault();try{h(!0);const C=await ye.createRedeemCodes({username:((w=E.userData)==null?void 0:w.username)||"",type:r,count:u});f.success(C.message),M()}catch(C){C instanceof Error&&f.error(C.message)}finally{h(!1)}},x=async p=>{var w;if(window.confirm("确定要删除这个兑换码吗？"))try{h(!0);const C=await ye.deleteRedeemCode({username:((w=E.userData)==null?void 0:w.username)||"",id:p});f.success(C.message),M()}catch(C){C instanceof Error&&f.error(C.message)}finally{h(!1)}},te=async(p,w)=>{var C;try{h(!0);const V=await ye.updateRedeemCode({username:((C=E.userData)==null?void 0:C.username)||"",id:p,status:w});f.success("更新状态成功"),M()}catch(V){V instanceof Error&&f.error(V.message)}finally{h(!1)}};return d.useEffect(()=>{M()},[g]),e.jsxs(_r,{children:[e.jsxs(_e,{children:[e.jsx(Ne,{children:"创建兑换码"}),e.jsxs(Nr,{onSubmit:i,children:[e.jsxs(Oe,{children:[e.jsx(Ye,{children:"类型"}),e.jsxs(Or,{value:r,onChange:p=>t(p.target.value),children:[e.jsx("option",{value:"yearly",children:"年度会员"}),e.jsx("option",{value:"monthly",children:"月度会员"})]})]}),e.jsxs(Oe,{children:[e.jsx(Ye,{children:"数量"}),e.jsx(Yr,{type:"number",min:"1",max:"100",value:u,onChange:p=>T(parseInt(p.target.value))})]}),e.jsx(qr,{type:"submit",disabled:k,children:k?"创建中...":"创建兑换码"})]})]}),e.jsxs(_e,{children:[e.jsx(Ne,{children:"兑换码列表"}),e.jsxs(Hr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(ee,{children:"ID"}),e.jsx(ee,{children:"兑换码"}),e.jsx(ee,{children:"类型"}),e.jsx(ee,{children:"状态"}),e.jsx(ee,{children:"创建时间"}),e.jsx(ee,{children:"使用者"}),e.jsx(ee,{children:"使用时间"}),e.jsx(ee,{children:"操作"})]})}),e.jsx("tbody",{children:v.map(p=>e.jsxs("tr",{children:[e.jsx(re,{children:p.id}),e.jsx(re,{children:p.code}),e.jsx(re,{children:p.type==="yearly"?"年度会员":"月度会员"}),e.jsx(re,{children:p.statusDesc}),e.jsx(re,{children:new Date(p.createdAt).toLocaleString()}),e.jsx(re,{children:p.usedBy||"-"}),e.jsx(re,{children:p.usedAt?new Date(p.usedAt).toLocaleString():"-"}),e.jsxs(re,{children:[p.status===0&&e.jsx(De,{onClick:()=>te(p.id,2),children:"禁用"}),p.status===2&&e.jsx(De,{onClick:()=>te(p.id,0),children:"启用"}),e.jsx(De,{$type:"danger",onClick:()=>x(p.id),children:"删除"})]})]},p.id))})]}),e.jsxs(Wr,{children:[e.jsx(qe,{disabled:g===1,onClick:()=>z(g-1),children:"上一页"}),e.jsx(qe,{disabled:g*N>=B,onClick:()=>z(g+1),children:"下一页"})]})]})]})},Kr=s.div`
  display: flex;
  min-height: 100vh;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#f5f7fa"};
`,Zr=s.div`
  width: 260px;
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  box-shadow: ${({theme:r})=>r.mode==="dark"?"1px 0 5px rgba(0,0,0,0.2)":"1px 0 5px rgba(0,0,0,0.05)"};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  border-radius: 0 8px 8px 0;
`,Jr=s.div`
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:r})=>r.mode==="dark"?"#2a2a2a":"#ebeef5"};
`,Qr=s.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
  position: relative;
  display: flex;
  align-items: center;
`,Xr=s.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  flex-grow: 1;
`,ue=s.li`
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 8px 12px 8px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    color: ${({theme:r,$active:t})=>t?"#409eff":r.mode==="dark"?"rgba(255, 255, 255, 0.7)":"#606266"};
    background: ${({$active:r,theme:t})=>r?t.mode==="dark"?"rgba(64, 158, 255, 0.1)":"#ecf5ff":"transparent"};
    text-decoration: none;
    transition: all 0.2s;
    border-radius: 8px;
    
    &:hover {
      color: ${({theme:r,$active:t})=>t?"#409eff":r.mode==="dark"?"#ffffff":"#303133"};
      background: ${({theme:r,$active:t})=>t?r.mode==="dark"?"rgba(64, 158, 255, 0.15)":"#ecf5ff":r.mode==="dark"?"rgba(255, 255, 255, 0.05)":"#f5f7fa"};
    }
  }
`,be=s.span`
  font-size: 20px;
  font-weight: 600;
`,et=s.div`
  padding: 12px 20px;
  border-top: none;
  display: flex;
  justify-content: center;
`,rt=s.button`
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
`,tt=s.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: ${({theme:r})=>r.mode==="dark"?"#141414":"#f5f7fa"};
`;s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
  margin-bottom: 20px;
`;s.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`;s.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;s.div`
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
`;s.span`
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.8)":"#606266"};
  font-weight: 500;
  font-size: 15px;
`;const Ge=s.div`
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
`;s.h2`
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
`;s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;s.div`
  background: ${({theme:r})=>r.mode==="dark"?"#1f1f1f":"#ffffff"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: ${({theme:r})=>(r.mode==="dark","0 2px 12px 0 rgba(0,0,0,0.1)")};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({theme:r})=>r.mode==="dark"?"0 4px 16px 0 rgba(0,0,0,0.2)":"0 4px 16px 0 rgba(0,0,0,0.1)"};
    transform: translateY(-2px);
  }
`;s.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.6)":"#909399"};
  margin-bottom: 12px;
`;s.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:r})=>r.mode==="dark"?"#ffffff":"#303133"};
`;const Ke=s.button`
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
`;s(Ke)`
  background: #409eff;
  color: white;
  
  &:hover {
    background: #66b1ff;
  }
  
  &:active {
    background: #3a8ee6;
  }
`;s(Ke)`
  background: #f56c6c;
  color: white;
  
  &:hover {
    background: #f78989;
  }
  
  &:active {
    background: #dd6161;
  }
`;const st=()=>e.jsx(Ge,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"300px",fontSize:"24px",fontWeight:"500",color:"inherit",opacity:"0.7"},children:"开发中~"}),nt=()=>e.jsx(Ge,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"300px",fontSize:"24px",fontWeight:"500",color:"inherit",opacity:"0.7"},children:"开发中~"}),at=()=>{const[r,t]=d.useState("dashboard"),u=er(),{theme:T}=Ie(),[k,h]=d.useState(null),[v,I]=d.useState(!0);d.useEffect(()=>{(async()=>{try{if(I(!0),!E.forceRefreshLoginStatus()){f.error("请先登录"),u("/login");return}const B=await E.refreshUserInfo();if(h(B),B.username!=="chenming2"&&B.username!=="BubbleWukon"&&B.username!=="blacksoup"){f.error("没有管理员权限"),u("/");return}}catch(N){console.error("权限检查失败:",N),f.error("权限检查失败"),u("/")}finally{I(!1)}})()},[u]);const g=()=>{switch(r){case"dashboard":return e.jsx(st,{});case"users":return e.jsx(br,{});case"voices":return e.jsx(Vr,{});case"codes":return e.jsx(Gr,{});case"settings":return e.jsx(nt,{});default:return e.jsx("div",{children:"请选择功能"})}};return v?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:T==="dark"?"#141414":"#f5f7fa",color:T==="dark"?"#909399":"#606266"},children:"加载中..."}):e.jsxs(Kr,{children:[e.jsxs(Zr,{children:[e.jsx(Jr,{children:e.jsx(Qr,{children:"泡泡后台"})}),e.jsxs(Xr,{children:[e.jsx(ue,{$active:r==="dashboard",onClick:()=>t("dashboard"),children:e.jsx("a",{children:e.jsx(be,{children:"仪表盘"})})}),e.jsx(ue,{$active:r==="users",onClick:()=>t("users"),children:e.jsx("a",{children:e.jsx(be,{children:"用户管理"})})}),e.jsx(ue,{$active:r==="voices",onClick:()=>t("voices"),children:e.jsx("a",{children:e.jsx(be,{children:"音色管理"})})}),e.jsx(ue,{$active:r==="codes",onClick:()=>t("codes"),children:e.jsx("a",{children:e.jsx(be,{children:"兑换码管理"})})}),e.jsx(ue,{$active:r==="settings",onClick:()=>t("settings"),children:e.jsx("a",{children:e.jsx(be,{children:"系统设置"})})})]}),e.jsx(et,{children:e.jsx(rt,{onClick:()=>u("/"),children:"返回前台"})})]}),e.jsx(tt,{children:g()})]})};export{at as default};
