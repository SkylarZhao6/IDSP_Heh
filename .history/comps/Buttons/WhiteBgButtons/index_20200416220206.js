import React from 'react';
import '../../Buttons/buttons.css'

const HardButton = ({ text, backgroundColor, }) => <div>
    <div class="hardbtn" style={{ backgroundColor: backgroundColor }}>
        <p class="fab fa-facebook">{text}</p>
    </div>
</div>

HardButton.defaultProps = {
    text: "Login",
    backgroundColor: "#358E76",
}

export default HardButton;