import{S as W,i as X,s as Y,l as w,a as T,r as F,m as E,n as D,h as v,c as S,u as K,p as _,G as x,P as ee,b as J,H as u,v as ue,E as j,I as _e,Q as de,R as me,f as I,t as H,d as U,J as pe,T as he,w as G,x as R,y as q,B as N,g as Z}from"../chunks/index-6a91c4c1.js";import{d as te,c as ae}from"../chunks/helpers-624affc0.js";import{a as le}from"../chunks/store-5a05e7ee.js";import"../chunks/index-7b7d253f.js";function ve(l){let e,a,t,s,r,i,o,f,n,m=te(l[0].data)+"",b,k,A,z=l[0].titolo+"",g,d,h=l[0].introduzione+"",$,P,c,p;return{c(){e=w("div"),a=w("a"),t=w("img"),o=T(),f=w("div"),n=w("div"),b=F(m),k=T(),A=w("h2"),g=T(),d=w("p"),$=T(),P=w("a"),c=F("Leggi \u2192"),this.h()},l(V){e=E(V,"DIV",{class:!0});var L=D(e);a=E(L,"A",{href:!0});var B=D(a);t=E(B,"IMG",{class:!0,src:!0,alt:!0}),B.forEach(v),o=S(L),f=E(L,"DIV",{class:!0});var M=D(f);n=E(M,"DIV",{class:!0});var C=D(n);b=K(C,m),C.forEach(v),k=S(M),A=E(M,"H2",{class:!0});var Q=D(A);Q.forEach(v),g=S(M),d=E(M,"P",{class:!0});var ce=D(d);ce.forEach(v),$=S(M),P=E(M,"A",{class:!0,href:!0});var y=D(P);c=K(y,"Leggi \u2192"),y.forEach(v),M.forEach(v),L.forEach(v),this.h()},h(){_(t,"class","card-img-top"),x(t.src,s=ae(l[0].cover))||_(t,"src",s),_(t,"alt",r=l[0].titolo),_(a,"href",i=l[0].path),_(n,"class","small text-muted"),_(A,"class","card-title text-truncate fw-bold"),ee(A,"h4",!l[0].featured),_(d,"class","card-text text-truncate text-truncate-2 intro svelte-gco4v4"),_(P,"class","btn btn-primary fw-bolder"),_(P,"href",p=l[0].path),_(f,"class","card-body"),_(e,"class","card mb-4")},m(V,L){J(V,e,L),u(e,a),u(a,t),u(e,o),u(e,f),u(f,n),u(n,b),u(f,k),u(f,A),A.innerHTML=z,u(f,g),u(f,d),d.innerHTML=h,u(f,$),u(f,P),u(P,c)},p(V,[L]){L&1&&!x(t.src,s=ae(V[0].cover))&&_(t,"src",s),L&1&&r!==(r=V[0].titolo)&&_(t,"alt",r),L&1&&i!==(i=V[0].path)&&_(a,"href",i),L&1&&m!==(m=te(V[0].data)+"")&&ue(b,m),L&1&&z!==(z=V[0].titolo+"")&&(A.innerHTML=z),L&1&&ee(A,"h4",!V[0].featured),L&1&&h!==(h=V[0].introduzione+"")&&(d.innerHTML=h),L&1&&p!==(p=V[0].path)&&_(P,"href",p)},i:j,o:j,d(V){V&&v(e)}}}function ge(l,e,a){let t,{metadata:s}=e;return l.$$set=r=>{"metadata"in r&&a(1,s=r.metadata)},l.$$.update=()=>{l.$$.dirty&2&&a(0,t={...s})},[t,s]}class O extends W{constructor(e){super(),X(this,e,ge,ve,Y,{metadata:1})}}function se(l,e,a){const t=l.slice();return t[9]=e[a],t[11]=a,t}function re(l){let e,a,t=l[11]+1+"",s,r,i,o,f;function n(){return l[5](l[11])}return{c(){e=w("li"),a=w("span"),s=F(t),r=T(),this.h()},l(m){e=E(m,"LI",{class:!0});var b=D(e);a=E(b,"SPAN",{class:!0});var k=D(a);s=K(k,t),k.forEach(v),r=S(b),b.forEach(v),this.h()},h(){_(a,"class","page-link"),_(e,"class",i="page-item "+(l[0]==l[11]+1?"active":""))},m(m,b){J(m,e,b),u(e,a),u(a,s),u(e,r),o||(f=me(a,"click",n),o=!0)},p(m,b){l=m,b&1&&i!==(i="page-item "+(l[0]==l[11]+1?"active":""))&&_(e,"class",i)},d(m){m&&v(e),o=!1,f()}}}function $e(l){let e,a,t,s,r=l[1],i=[];for(let o=0;o<r.length;o+=1)i[o]=re(se(l,r,o));return{c(){e=w("nav"),a=w("hr"),t=T(),s=w("ul");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=E(o,"NAV",{"aria-label":!0});var f=D(e);a=E(f,"HR",{class:!0}),t=S(f),s=E(f,"UL",{class:!0});var n=D(s);for(let m=0;m<i.length;m+=1)i[m].l(n);n.forEach(v),f.forEach(v),this.h()},h(){_(a,"class","my-0"),_(s,"class","pagination justify-content-center my-4"),_(e,"aria-label","Pagination")},m(o,f){J(o,e,f),u(e,a),u(e,t),u(e,s);for(let n=0;n<i.length;n+=1)i[n].m(s,null)},p(o,[f]){if(f&5){r=o[1];let n;for(n=0;n<r.length;n+=1){const m=se(o,r,n);i[n]?i[n].p(m,f):(i[n]=re(m),i[n].c(),i[n].m(s,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=r.length}},i:j,o:j,d(o){o&&v(e),_e(i,o)}}}function be(l,e,a){let{posts:t}=e,{page_size:s}=e;const r=de();let i=t.length,o=Math.ceil(i/s),f=[...Array(o).keys()],n=1;function m(k){a(0,n=k),r("cambioPagina",{idx_start:(k-1)*s,idx_end:(k-1)*s+s-1})}const b=k=>m(k+1);return l.$$set=k=>{"posts"in k&&a(3,t=k.posts),"page_size"in k&&a(4,s=k.page_size)},[n,f,m,t,s,b]}class we extends W{constructor(e){super(),X(this,e,be,$e,Y,{posts:3,page_size:4})}}function Ee(l){let e,a,t,s;return t=new O({props:{metadata:l[2][0].metadata}}),{c(){e=w("div"),a=w("div"),G(t.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var i=D(e);a=E(i,"DIV",{class:!0});var o=D(a);R(t.$$.fragment,o),o.forEach(v),i.forEach(v),this.h()},h(){_(a,"class","col-lg-12"),_(e,"class","row")},m(r,i){J(r,e,i),u(e,a),q(t,a,null),s=!0},p:j,i(r){s||(I(t.$$.fragment,r),s=!0)},o(r){H(t.$$.fragment,r),s=!1},d(r){r&&v(e),N(t)}}}function ne(l){let e,a;return e=new O({props:{metadata:l[1][l[0]].metadata}}),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.metadata=t[1][t[0]].metadata),e.$set(r)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ie(l){let e,a;return e=new O({props:{metadata:l[1][l[0]+1].metadata}}),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.metadata=t[1][t[0]+1].metadata),e.$set(r)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function oe(l){let e,a;return e=new O({props:{metadata:l[1][l[0]+2].metadata}}),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.metadata=t[1][t[0]+2].metadata),e.$set(r)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function fe(l){let e,a;return e=new O({props:{metadata:l[1][l[0]+3].metadata}}),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.metadata=t[1][t[0]+3].metadata),e.$set(r)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ke(l){let e,a;return e=new we({props:{page_size:Ie,posts:l[1]}}),e.$on("cambioPagina",l[3]),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p:j,i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Pe(l){let e,a,t,s,r,i,o,f,n,m,b,k,A,z=l[2][0]&&Ee(l),g=l[1][l[0]]&&ne(l),d=l[1][l[0]+1]&&ie(l),h=l[1][l[0]+2]&&oe(l),$=l[1][l[0]+3]&&fe(l),P=l[1].length>4&&ke(l);return{c(){e=w("div"),z&&z.c(),a=T(),t=w("div"),s=w("div"),g&&g.c(),r=T(),i=w("div"),d&&d.c(),o=T(),f=w("div"),n=w("div"),h&&h.c(),m=T(),b=w("div"),$&&$.c(),k=T(),P&&P.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var p=D(e);z&&z.l(p),a=S(p),t=E(p,"DIV",{class:!0});var V=D(t);s=E(V,"DIV",{class:!0});var L=D(s);g&&g.l(L),L.forEach(v),r=S(V),i=E(V,"DIV",{class:!0});var B=D(i);d&&d.l(B),B.forEach(v),V.forEach(v),o=S(p),f=E(p,"DIV",{class:!0});var M=D(f);n=E(M,"DIV",{class:!0});var C=D(n);h&&h.l(C),C.forEach(v),m=S(M),b=E(M,"DIV",{class:!0});var Q=D(b);$&&$.l(Q),Q.forEach(v),M.forEach(v),k=S(p),P&&P.l(p),p.forEach(v),this.h()},h(){_(s,"class","col-lg-6"),_(i,"class","col-lg-6"),_(t,"class","row"),_(n,"class","col-lg-6"),_(b,"class","col-lg-6"),_(f,"class","row"),_(e,"class","col-lg-12")},m(c,p){J(c,e,p),z&&z.m(e,null),u(e,a),u(e,t),u(t,s),g&&g.m(s,null),u(t,r),u(t,i),d&&d.m(i,null),u(e,o),u(e,f),u(f,n),h&&h.m(n,null),u(f,m),u(f,b),$&&$.m(b,null),u(e,k),P&&P.m(e,null),A=!0},p(c,[p]){c[2][0]&&z.p(c,p),c[1][c[0]]?g?(g.p(c,p),p&1&&I(g,1)):(g=ne(c),g.c(),I(g,1),g.m(s,null)):g&&(Z(),H(g,1,1,()=>{g=null}),U()),c[1][c[0]+1]?d?(d.p(c,p),p&1&&I(d,1)):(d=ie(c),d.c(),I(d,1),d.m(i,null)):d&&(Z(),H(d,1,1,()=>{d=null}),U()),c[1][c[0]+2]?h?(h.p(c,p),p&1&&I(h,1)):(h=oe(c),h.c(),I(h,1),h.m(n,null)):h&&(Z(),H(h,1,1,()=>{h=null}),U()),c[1][c[0]+3]?$?($.p(c,p),p&1&&I($,1)):($=fe(c),$.c(),I($,1),$.m(b,null)):$&&(Z(),H($,1,1,()=>{$=null}),U()),c[1].length>4&&P.p(c,p)},i(c){A||(I(z),I(g),I(d),I(h),I($),I(P),A=!0)},o(c){H(z),H(g),H(d),H(h),H($),H(P),A=!1},d(c){c&&v(e),z&&z.d(),g&&g.d(),d&&d.d(),h&&h.d(),$&&$.d(),P&&P.d()}}}const Ae=async({fetch:l})=>({props:{allPosts:await(await l("/blog/post.json")).json()}}),Ie=4;function De(l,e,a){let t;pe(l,le,n=>a(5,t=n));let{allPosts:s}=e;he(le,t=s,t);let r=[...s],i=0,o=r.filter(n=>n.metadata.featured==!0);if(o.length>0){let n=r.indexOf(o[0]);r.splice(n,1)}function f(n){a(0,i=n.detail.idx_start)}return l.$$set=n=>{"allPosts"in n&&a(4,s=n.allPosts)},[i,r,o,f,s]}class Me extends W{constructor(e){super(),X(this,e,De,Pe,Y,{allPosts:4})}}export{Me as default,Ae as load};