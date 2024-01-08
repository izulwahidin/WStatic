// shared localstorage
function setNewSubdomain() {
    const uniq = uniqid()
    const mainDomain = getMainDomain()
    document.domain = mainDomain;
    window.parent.postMessage({
        action: 'setLocalStorage',
        key: 'subdomain',
        value: uniq,
    }, `https://${mainDomain}`);
    
    window.location.replace(`https://${uniq}.${mainDomain}/?message=woi`)
}

window.addEventListener('message', function (event) {
    const regexString = `https:\/\/[a-z0-9.-]+\.${getMainDomain()}`;
    const regex = new RegExp(regexString);
    if (event.origin.match(regex)) {
      if (event.data.action === 'setLocalStorage') {
        // Update the localStorage on the main domain
        localStorage.setItem(event.data.key, event.data.value);
      }
    }
});


function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};

// get Main Domain
function getMainDomain() {
    const domainParts = window.location.hostname.split('.');
    if (domainParts.length >= 2) return domainParts.slice(-2).join('.');
    return window.location.hostname;
}
