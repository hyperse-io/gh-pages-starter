"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[986],{9007:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=e(2540),r=e(3023);const i={},a="React Hook Form",s={id:"react-hook-form",title:"React Hook Form",description:"Here an example if you want to plug MuiColorInput to your form using React Hook Form.",source:"@site/docs/react-hook-form.md",sourceDirName:".",slug:"/react-hook-form",permalink:"/gh-pages-starter/docs/react-hook-form",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperse-io/gh-pages-starter/docs/react-hook-form.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/gh-pages-starter/docs/playground"}},c={},l=[];function m(o){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"react-hook-form",children:"React Hook Form"}),"\n",(0,n.jsxs)(t.p,{children:["Here an example if you want to plug ",(0,n.jsx)(t.code,{children:"MuiColorInput"})," to your form using ",(0,n.jsx)(t.a,{href:"https://react-hook-form.com/",children:"React Hook Form"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Button from '@mui/material/Button';\nimport { MuiColorInput, matchIsValidColor } from 'mui-color-input';\nimport { Controller, useForm } from 'react-hook-form';\n\nconst App = () => {\n  const { control, handleSubmit } = useForm({\n    defaultValues: {\n      color: '#ffffff',\n    },\n  });\n\n  const onSubmit = (data) => {\n    alert(JSON.stringify(data));\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        name=\"color\"\n        control={control}\n        rules={{ validate: matchIsValidColor }}\n        render={({ field, fieldState }) => (\n          <MuiColorInput\n            {...field}\n            format=\"hex\"\n            helperText={fieldState.invalid ? 'Color is invalid' : ''}\n            error={fieldState.invalid}\n          />\n        )}\n      />\n      <div>\n        <Button type=\"submit\" variant=\"contained\" sx={{ mt: 2 }}>\n          Submit\n        </Button>\n      </div>\n    </form>\n  );\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://codesandbox.io/s/react-hook-form-with-mui-color-input-94iiv1?fontsize=14&hidenavigation=1&theme=dark",children:(0,n.jsx)(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"})})})]})}function d(o={}){const{wrapper:t}={...(0,r.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(m,{...o})}):m(o)}},3023:(o,t,e)=>{e.d(t,{R:()=>a,x:()=>s});var n=e(3696);const r={},i=n.createContext(r);function a(o){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function s(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:a(o.components),n.createElement(i.Provider,{value:t},o.children)}}}]);