import REact from 'react';
import './ChartBar.css';

type ChartBarProps = {
    value: number;
    maxValue: number; 
    label: string;
}

const ChartBar = (props: ChartBarProps) => {
    let barFillHeight = '0%';

    if (props.maxValue) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>    
        <div className='chart-bar__label'>{props.label}</div>
    </div>
}

export default ChartBar;