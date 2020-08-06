import React from 'react'

import MyStackList from '../components/MyStackList'
import MyStackListItem from '../components/MyStackListItem'

import javascript_icon from '../../assets/static/javascript-b.png'

import '../../assets/styles/pages/MyStack.styl'

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
        <MyStackListItem icon={javascript_icon} title='HTML' />
        <MyStackListItem icon={javascript_icon} title='CSS' />
      </MyStackList>
      
      <MyStackList titleList='Fameworks y preprocesadores'>
        <MyStackListItem icon={javascript_icon} title='React JS' />
        <MyStackListItem icon={javascript_icon} title='Pug' />
        <MyStackListItem icon={javascript_icon} title='Stylus' />
        <MyStackListItem icon={javascript_icon} title='Sass' />
      </MyStackList>
      
      <MyStackList titleList='Aprendiendo o con ligero conocimiento de'>
        <MyStackListItem icon={javascript_icon} title='Node JS' />
        <MyStackListItem icon={javascript_icon} title='C#' />
      </MyStackList>
      
      <MyStackList titleList='Proximamente'>
        <MyStackListItem icon={javascript_icon} title='TypeScript' />
        <MyStackListItem icon={javascript_icon} title='Python' />
      </MyStackList>
    </div>
  )
}

export default MyStack