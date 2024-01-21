import React from 'react';
import './TeamDescription.scss';
import Content from '../Content/Content.tsx';
import Group from '../../images/Group.png'
import Employee1 from '../../images/Employee1.png'
import Employee2 from '../../images/Employee2.png'
import Employee3 from '../../images/Employee3.png'

const TeamDescription: React.FC = () => {
    return(
        <Content>
            <div className='our-team'>
                <img src={Group} alt="" />
                <div className='our-team__description'>
                    <h1>Наша команда</h1>
                    <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                    <div className='our-team__photo'>
                        <img src={Employee1} alt="EmployeeAvatart"/>
                        <img src={Employee2} alt="EmployeeAvatart"/>
                        <img src={Employee3} alt="EmployeeAvatart"/>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default TeamDescription;