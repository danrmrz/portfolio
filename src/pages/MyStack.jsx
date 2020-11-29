import React from 'react'

import MyStackList from '../components/MyStackList'
import MyStackListItem from '../components/MyStackListItem'

import '../assets/styles/pages/MyStack.styl'

const javascript_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fjavascript-b.png?alt=media&token=5f1e9cef-0a8c-4051-a620-52945d1340c6'
const html_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fhtml5-b.png?alt=media&token=4cc46003-93f5-492c-9b27-95431680ea9c'
const css_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fcss3-b.png?alt=media&token=8d255b35-a46d-47a9-8e70-67d6196cb553'
const react_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Freact-b.png?alt=media&token=fa33197e-01fc-4b99-a18b-48170a20630e'
const pug_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fpug-b.png?alt=media&token=25e6cd14-7e63-4649-8656-6afcb62618b1'
const stylus_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fstylus-b.svg?alt=media&token=e9f95c20-f140-4ffb-ad69-6606b6eed207'
const sass_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fsass-b.png?alt=media&token=c3484532-4254-4e18-9598-3e3cc0546db8'
const nodejs_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fnodejs-b.png?alt=media&token=392b085b-901a-4785-ae87-be6ed565334e'
const c_sharp_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fc_sharp-b.png?alt=media&token=42851752-d8ad-4167-ad47-bd7c1df93565'
const typescript_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Ftypescript-b.png?alt=media&token=5e9fb353-6957-4865-a30e-9ecff7380226'
const python_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/technologies%2Fpython-b.png?alt=media&token=d5dd0bad-d389-41f5-9209-f627907bd58b'

const MyStack = () => {
  return(
    <div className="mystack text-container">
      <h1 className='mystack__title page-title'>My stack</h1>
      <p className='mystack__description'>
        Hola, si quieres darte una mejor idea de 
        las tecnologías que domino y con las 
        cuales he desarrollado mis proyectos, 
        incluyendo este portafolio, aquí te dejo 
        una pequeña lista.
      </p>
      
      <div className="mystack__container">
        <MyStackList titleList='No pueden faltar'>
          <MyStackListItem icon={javascript_icon} title='JavaScript' />
          <MyStackListItem icon={html_icon} title='HTML' />
          <MyStackListItem icon={css_icon} title='CSS' />
        </MyStackList>
        
        <MyStackList titleList='Fameworks y preprocesadores'>
          <MyStackListItem icon={react_icon} title='React JS' />
          <MyStackListItem icon={pug_icon} title='Pug' />
          <MyStackListItem icon={stylus_icon} title='Stylus' />
          <MyStackListItem icon={sass_icon} title='Sass' />
        </MyStackList>
        
        <MyStackList titleList='Aprendiendo o con ligero conocimiento de'>
          <MyStackListItem icon={nodejs_icon} title='Node JS' />
          <MyStackListItem icon={c_sharp_icon} title='C#' />
        </MyStackList>
        
        <MyStackList titleList='Proximamente'>
          <MyStackListItem icon={typescript_icon} title='TypeScript' />
          <MyStackListItem icon={python_icon} title='Python' />
        </MyStackList>
      </div>
    </div>
  )
}

export default MyStack