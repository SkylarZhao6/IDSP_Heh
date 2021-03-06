import React from 'react';
import './softButtons.css';

const SoftButton = ({ text, backgroundColor, boxShadow }) => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ boxshadow: boxshadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p class="fab fa-facebook">{text}</p>
    </div>

    {/* <div class="btn">
            <i class="fab fa-twitter"></i>
        </div>
    </div> */}
</div>

SoftButton.defaultProps = {
    text: "Default",
    backgroundColor: "#145844",
    boxShadow: '20px 20px 60px #114b3a, -20px -20px 60px #17654e',
}

export default SoftButton;