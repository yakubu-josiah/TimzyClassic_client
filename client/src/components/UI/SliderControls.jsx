import React from 'react';
import './SliderControls.css'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';

const SliderControls = ({ onLeftClick, onRightClick }) => {
    return (
        <div className="SC-paginate">
            <div className="right" onClick={onRightClick}>
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="medium"/>
            </div>
            <div className="left" onClick={onLeftClick}>
                <KeyboardDoubleArrowLeftOutlinedIcon fontSize="medium"/>
            </div>
        </div>
    );
};

export default SliderControls;