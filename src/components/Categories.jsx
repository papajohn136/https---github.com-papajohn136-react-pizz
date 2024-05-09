import React, { useState } from 'react'

function Categories() {

  const [activeIndex, setActiveIndex] = useState(0)

  const onClickAddButton = (index) => { setActiveIndex(index)}


  const categories = [
    'Все',
    'Властелин колец',
    'Ведьмак',
    'Метро Исход',
    'Bloodborne',
  ]

  return (
    <div className="categories">
      <ul>

        {categories.map((value, i) => 
        <li  
        key={i}
        onClick={() => onClickAddButton(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>)}
      
      </ul>
    </div>
  );
}

export default Categories
