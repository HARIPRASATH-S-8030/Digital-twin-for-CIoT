module.exports = {
    // This tells Node-RED to fetch the secret you saved in the Render dashboard
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    
    // Optional but recommended: Disable the editor theme project warnings
    editorTheme: { projects: { enabled: false } }
};
