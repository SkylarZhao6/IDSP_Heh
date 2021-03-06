import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text, icon }) => <div>
    <button class="settingsbtn">
        src={icon}{text}
    </button>
</div>

SettingsBtn.defaultProps = {
    text: "default",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
}

export default SettingsBtn;