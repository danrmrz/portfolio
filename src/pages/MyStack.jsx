import React from 'react'

import MyStackList from '../components/MyStackList'
import MyStackListItem from '../components/MyStackListItem'

import javascript_icon from '../assets/static/tecnologies/javascript-b.png'
import html_icon from '../assets/static/tecnologies/html5-b.png'
import css_icon from '../assets/static/tecnologies/css3-b.png'
import react_icon from '../assets/static/tecnologies/react-b.png'
import pug_icon from '../assets/static/tecnologies/pug-b.svg'
import stylus_icon from '../assets/static/tecnologies/stylus-b.svg'
import sass_icon from '../assets/static/tecnologies/sass-b.png'
import nodejs_icon from '../assets/static/tecnologies/nodejs-b.png'
import c_sharp_icon from '../assets/static/tecnologies/c_sharp-b.png'
import typescript_icon from '../assets/static/tecnologies/typescript-b.png'
import python_icon from '../assets/static/tecnologies/python-b.png'

import '../assets/styles/pages/MyStack.styl'

const MyStack = () => {
  return(
    <div className="mystack text-container">
      <h1 className='mystack__title page-title'>My stack</h1>
      <p>
        Hola, si quieres darte una mejor idea de 
        las tecnologías que domino y con las 
        cuales he desarrollado mis proyectos, 
        incluyendo este portafolio, aquí te dejo 
        una pequeña lista.
      </p>
      
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
  )
}

export default MyStack