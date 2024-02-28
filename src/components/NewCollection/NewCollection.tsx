import React from 'react';
import './NewCollection.scss';
import Content from '../Content/Content.tsx';
import { ReactComponent as Star2 } from '../../images/Star2.svg'

const NewCollection: React.FC = () => {
    return (
        <Content>
            <div className='new-collection'>
                <div className='new-collection__header'>
                    <Star2 />
                    <h1>Новая коллекция французских авторов</h1>
                </div>
                <p className='new-collection__description'>
                    Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. <br/> <br/>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                </p>
                <button>Ознакомиться</button>
            </div>
        </Content>
    )
}

export default NewCollection;