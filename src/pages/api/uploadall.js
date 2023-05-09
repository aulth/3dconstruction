import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
const { ObjectId } = require('bson');
const mongoose = require('mongoose');
connectToDb();

const data = [
    {
      "_id": new ObjectId("6457a89ef31714a6248dd405"),
      "project": "(G+2P+8F) RESIDENTIAL BUILDING",
      "area": "Plot No. 6456039 at Wadi Al Safa- Dubai",
      "consultant": "Atrium Architectural & Engineering Consultancy",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466383/yoagg3qwgcavgrhnuptz.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466387/vrcazn1kpdrgk1pcej3h.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466390/kr8chzv1spzbqgk5fd97.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466391/jyhg8jictlpdsrouinme.jpg"
      ],
      "completed": true,
"priority":1,
      "createdAt": "2023-05-07T13:33:18.542Z",
      "updatedAt": "2023-05-07T14:54:37.444Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6457a8fff31714a6248dd409"),
      "project": "(G+4+R) Residential Building ",
      "area": "Plot No. RA-30 at Residential City - Dubai",
      "consultant": "Al Dana Engineering Consultant",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466485/zkoxj6l6gzxmnta1byll.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466487/ux1mxo1iucv1jzlltboq.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466490/jgthqn7pjqyroanc093h.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466492/wdnzdjbd89kjeqidy4co.jpg"
      ],
      "completed": true,
"priority":2,
      "createdAt": "2023-05-07T13:34:55.610Z",
      "updatedAt": "2023-05-07T13:34:55.610Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6457aa5b6634212751c30379"),
      "project": "(B+G+4+R) Residential Building",
      "area": "Plot No. RD-28 at DWC - Dubai",
      "consultant": "Al Ajmi Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466834/ovij1by2lrzk0bcgskoi.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466836/pb72o7hkpsaq6je9rphp.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466838/k49padxxmrmak1foafne.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683466839/nleyzmgkz4gouyluj0hw.jpg"
      ],
      "completed": true,
"priority":3,
      "createdAt": "2023-05-07T13:40:43.473Z",
      "updatedAt": "2023-05-07T13:40:43.473Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6457acd06634212751c30390"),
      "project": "(B+G+9F) Building ",
      "area": "Plot No. (6457847) at Wadi Al Safa, Dubai",
      "consultant": "Atrium architect & engineering consultant",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467458/hjf8fltjqid8ppgazmcs.png",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467460/rs3agstetv8sxavo65xq.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467464/wavpnrscyez4qp96v55q.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467469/jvoe83b4snjv8ceoq86j.jpg"
      ],
      "completed": false,
"priority":4,
      "createdAt": "2023-05-07T13:51:12.078Z",
      "updatedAt": "2023-05-07T13:56:09.290Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6457ad026634212751c30393"),
      "project": "(G+P+10F+R) Building",
      "area": "Plot No. 645-7810 at Wadi Al Safa, Dubai",
      "consultant": "Islamic Architects Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467513/owgwwwdzutmqgbbeokmf.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467515/ikpfiiyfhanzhuxcl3af.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467517/k3dh2mqg7jramjckjpcv.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683467518/o7gxnf4m19trkazjdyio.jpg"
      ],
      "completed": false,
"priority":5,
      "createdAt": "2023-05-07T13:52:02.747Z",
      "updatedAt": "2023-05-07T13:56:00.333Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6457b0696634212751c3039a"),
      "project": "(B+G+3F+R) Residential & Commercial Building ",
      "area": "Plot No. 3342846 at Al Satwa- Dubai",
      "consultant": "Aljazeera Architect Consultancy",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683468354/fves4judocwhxvlmuh9a.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683468358/aplsdkdxh93yia79zjiq.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683468359/n3v0ef4f0nt24mmgvw27.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683468361/c6vpombvoqn8eipw7gdh.jpg"
      ],
      "completed": false,
"priority":6,
      "createdAt": "2023-05-07T14:06:33.869Z",
      "updatedAt": "2023-05-07T14:06:33.869Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459f2df0d9a3b56ec6c4e47"),
      "project": "(G+1) VILLA + SERVICE BLOCK",
      "area": "PLOT 2280978 AT AL TWAR, DUBAI",
      "consultant": "ISLAMIC ARCHITECT AND CONSULTING ENGINEERS",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616471/hxbf5jzvfiqdauoshan5.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616472/ofsfzlxb57bd9c2uwccq.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616472/c6oz7lzxb7yrgm7d2ujj.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616473/pylz6mwzyfy3g5en4vrf.jpg"
      ],
      "completed": false,
"priority":7,
      "createdAt": "2023-05-09T07:14:39.323Z",
      "updatedAt": "2023-05-09T07:14:39.323Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459f3df0d9a3b56ec6c4e4c"),
      "project": "(B+G+3TYP+HC+R) BUILDING",
      "area": "PLOT NO. 358-7191 AT AL QOUZ, DUBAI",
      "consultant": "ISLAMIC ARCHITECT AND CONSULTING ENGINEERS",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616727/dehd9htynkm2o3klrqu9.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616728/i57xjbeycztdrlnwdjf1.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616728/vaylnm928rujuk6iamdz.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616729/nisuomtxfp8rzmffdm8y.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616730/k04bvkt7uvs4e3lj6ktd.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616730/gbk5kyfrbhxdq4ww8zcj.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616731/qlt9jn9djiqmju7j5qna.jpg"
      ],
      "completed": false,
"priority":8,
      "createdAt": "2023-05-09T07:18:55.083Z",
      "updatedAt": "2023-05-09T07:18:55.083Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459f4b50d9a3b56ec6c4e50"),
      "project": "(G+1) VILLA",
      "area": "PLOT NO. 356-1072 AT UMM SUQEIM 1ST, DUBAI",
      "consultant": "ISLAMIC ARCHITECT AND CONSULTING ENGINEERS",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616941/jxc4lswr6qhuuq7x3cwz.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616942/gdffucoz5g5upidmxqzn.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616942/l2vqrtc7lwldpuxtrga1.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683616943/jogwbofrijxej2yafxwv.jpg"
      ],
      "completed": false,
"priority":9,
      "createdAt": "2023-05-09T07:22:29.400Z",
      "updatedAt": "2023-05-09T07:22:29.400Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459f5a90d9a3b56ec6c4e54"),
      "project": "(G) VILLA + SERVICE BLOCK",
      "area": "PLOT NO. (424-0365) AT AL WARQA 4TH, DUBAI",
      "consultant": "ISLAMIC ARCHITECT AND CONSULTING ENGINEERS",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683617157/cyupddl2uo9snpcdn9jo.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683617160/nztbcvwqvxh3u23gamp5.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683617161/uaxwb4pz5ly6pircbsgk.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683617162/upp0ly0vhofnqeawh9n1.jpg"
      ],
      "completed": false,
"priority":10,
      "createdAt": "2023-05-09T07:26:33.744Z",
      "updatedAt": "2023-05-09T07:26:33.744Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459f9a004989e0f8a52419a"),
      "project": "(B+G+1) Commercial Building ",
      "area": "Plot No. 5996679 at Jabel Ali- Dubai",
      "consultant": "Design Center Architects & Engineers Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618181/vxhb1thwcx66yjlnpdli.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618183/wwogqcpmu5upp2v5trfp.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618185/rxl4aferc8elsvvsqgdj.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618186/ji6v9c2v3eftjbnznfwv.jpg"
      ],
      "completed": true,
"priority":11,
      "createdAt": "2023-05-09T07:43:28.091Z",
      "updatedAt": "2023-05-09T07:43:28.091Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fa6504989e0f8a52419e"),
      "project": "(B+G+1) Commercial Building ",
      "area": "Plot No. 6827281 at Dubai Sport City",
      "consultant": "Iconic Architectural & Engineering Consultant",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618388/vgvkbr6yw9p2kctmav2m.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618391/wgww9i23aafc0nm4g88n.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618393/udnxqfnfbyba81ordwnz.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618395/fp0kqvx0e6paqdcn564f.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618397/ud8qjyilhosqdtpkzegz.jpg"
      ],
      "completed": true,
"priority":12,
      "createdAt": "2023-05-09T07:46:45.026Z",
      "updatedAt": "2023-05-09T07:46:45.026Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fb2604989e0f8a5241a1"),
      "project": "(G+M+3F+R) Residential Building ",
      "area": "Plot No. 119-101 at Al Rigga- Dubai",
      "consultant": "Al Dana Engineering Consultant",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618594/ldoatoztptikyvfphxk8.jpg"
      ],
      "completed": true,
"priority":13,
      "createdAt": "2023-05-09T07:49:58.293Z",
      "updatedAt": "2023-05-09T07:49:58.293Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fbed04989e0f8a5241a4"),
      "project": "(G+2F+2R) Residential Building",
      "area": "Plot No. 129-431 at Port Saeed- Dubai",
      "consultant": "Al Watan Al Arabi Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618786/espwvt7mhnrrqemr0wzy.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618789/wlk0ey4jswbp7sh8rb28.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618789/rmxlgu3s6l0mocwgvwaw.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618791/xk3kunn2kwrkskwnaaly.jpg"
      ],
      "completed": true,
"priority":14,
      "createdAt": "2023-05-09T07:53:17.894Z",
      "updatedAt": "2023-05-09T07:53:17.894Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fc3d04989e0f8a5241a7"),
      "project": "(G+1) Commercial Building ",
      "area": "Plot No. 11-009/A at Dubai Silicon Oasis",
      "consultant": "Golden Square Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618874/crwfym5lu9qlid71h53e.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683618876/ilcd6vtshywipu8fklbs.jpg"
      ],
      "completed": true,
"priority":15,
      "createdAt": "2023-05-09T07:54:37.892Z",
      "updatedAt": "2023-05-09T07:54:37.892Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fcc104989e0f8a5241ab"),
      "project": "15 Villas (G+1)",
      "area": "Plot No. 251-982, 251-1550, 251-2529 at Mirdif - Dubai",
      "consultant": "Proline Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683619002/hqtod49l9ijtvgffaq7m.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683619004/nkqnp6r0c9qdkmjd7epv.jpg"
      ],
      "completed": true,
"priority":16,
      "createdAt": "2023-05-09T07:56:49.398Z",
      "updatedAt": "2023-05-09T07:56:49.398Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("6459fcfd04989e0f8a5241ae"),
      "project": "4 Villas (G) ",
      "area": "Plot No. 251-935, 251-936 at Mirdif - Dubai",
      "consultant": "Proline Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683619056/sgxqrcrioatsp29s01f7.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683619057/xv5ggwl8hf6otdtvluve.jpg"
      ],
      "completed": true,
"priority":17,
      "createdAt": "2023-05-09T07:57:49.755Z",
      "updatedAt": "2023-05-09T07:57:49.755Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a02e8ac9f535cc3441e2d"),
      "project": "Ground Mosque + Imam & Moazen House ",
      "area": "Plot no. (2825603) at Al Khawaneej Second, Dubai",
      "consultant": "Islamic Affairs & Charitable Activities Department",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620579/gwit0iptakbsbouk0kqi.png",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620580/vnonsxfvhw2hk4y6obqv.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620581/laullhazncs1qvgpeamy.jpg"
      ],
      "completed": true,
"priority":18,
      "createdAt": "2023-05-09T08:23:04.510Z",
      "updatedAt": "2023-05-09T08:23:04.510Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0384ac9f535cc3441e33"),
      "project": "(G+1+R) Building ",
      "area": "Plot No. (251-4197) at Mirdif, Dubai",
      "consultant": "Proline Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620730/vaopvgewxpldujzwplfo.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620731/e3kkqfdieonixbwsaxpt.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620732/i3ak7bmzktftvue9x5w9.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620733/mfymjbbk49xytebzcbap.jpg"
      ],
      "completed": true,
"priority":19,
      "createdAt": "2023-05-09T08:25:40.361Z",
      "updatedAt": "2023-05-09T08:25:40.361Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a03e4ac9f535cc3441e36"),
      "project": "(G) Vehicle Testing Center ",
      "area": "Plot No. 614-305 at Ras Al Khor - Dubai",
      "consultant": "Engineers Consultant Office",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620833/euvfcwcjo2u9ykfilxom.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620834/gjiubkjzmjb5dwixl6sm.jpg"
      ],
      "completed": true,
"priority":20,
      "createdAt": "2023-05-09T08:27:16.679Z",
      "updatedAt": "2023-05-09T08:27:16.679Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0419ac9f535cc3441e39"),
      "project": "(G+8) Residential Building ",
      "area": "Plot No. 672915 at Al Barsha- Dubai",
      "consultant": "Islamic Architect & Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620887/fsbgl2epi9hm0pzvawhs.jpg"
      ],
      "completed": true,
"priority":21,
      "createdAt": "2023-05-09T08:28:09.496Z",
      "updatedAt": "2023-05-09T08:28:09.496Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0447ac9f535cc3441e3c"),
      "project": "(B+G+1) Villa + Services Block  ",
      "area": "Plot No. 228-273 at Al Twar - Dubai",
      "consultant": "Deira Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620932/hfvpm6wkmfyvsnpbh3cb.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620933/mcamtn0e5gbukd4l0hrr.jpg"
      ],
      "completed": true,
"priority":22,
      "createdAt": "2023-05-09T08:28:55.584Z",
      "updatedAt": "2023-05-09T08:28:55.584Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a048dac9f535cc3441e40"),
      "project": "(B+G+1) Villa ",
      "area": "Plot No. 353-324 at Al Safa First- Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683620999/xwy1jeowyieyqu14ma0y.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621000/y2c7hewmrintowbazgie.jpg"
      ],
      "completed": true,
"priority":23,
      "createdAt": "2023-05-09T08:30:05.504Z",
      "updatedAt": "2023-05-09T08:30:05.504Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a04b1ac9f535cc3441e43"),
      "project": "(B+G+1) Villa + Service Block ",
      "area": "Plot No. 416-998 at Nad Al Hamar- Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621039/wovu8p0fexactvmqb8dl.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621040/xup18rqra81ve0xktbfa.jpg"
      ],
      "completed": true,
"priority":23,
      "createdAt": "2023-05-09T08:30:41.795Z",
      "updatedAt": "2023-05-09T08:30:41.795Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0512ac9f535cc3441e46"),
      "project": "(G+1) Villa ",
      "area": "Plot No. 416-887 at Nad Al Hamar- Dubai",
      "consultant": "Extreme Line Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621136/r01t9vuepmfebp0xc31v.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621137/mxmnjjy9mpwejwhmku2e.jpg"
      ],
      "completed": true,
"priority":25,
      "createdAt": "2023-05-09T08:32:18.548Z",
      "updatedAt": "2023-05-09T08:32:18.548Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a054aac9f535cc3441e49"),
      "project": "(G+1) Villa ",
      "area": "Plot No. 228-342 at Al Twar III- Dubai",
      "consultant": "Al Dana Engineering Consultant",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621189/ywc2isnkcrtv2uafz9se.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621192/gwafmfw4imiqscwdlujj.jpg"
      ],
      "completed": true,
"priority":26,
      "createdAt": "2023-05-09T08:33:14.129Z",
      "updatedAt": "2023-05-09T08:33:14.129Z",
      "__v": 0
    },
{
      "_id": new ObjectId("645a058aac9f535cc3441e4e"),
      "project": "(G+1) Villa ",
      "area": "Plot No. 672-109 at Al Barsha- Dubai",
      "consultant": "ISLAMIC ARCHITECT AND CONSULTING ENGINEERS",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621254/ctat81w5qt2bkymkxq4z.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621256/dslhoohwpw0qjsibqiaj.jpg"
      ],
      "completed": true,
"priority":27,
      "createdAt": "2023-05-09T08:34:18.915Z",
      "updatedAt": "2023-05-09T08:34:18.915Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a05e0ac9f535cc3441e53"),
      "project": "(G+1) Villa ",
      "area": "Plot No. 228-1158 at Al Twar- Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621338/r2fyqykm1ckbg86qb6kd.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621342/ebf81xscyj83jsv33pjc.jpg"
      ],
      "completed": true,
"priority":28,
      "createdAt": "2023-05-09T08:35:44.927Z",
      "updatedAt": "2023-05-09T08:35:44.927Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a062bac9f535cc3441e56"),
      "project": "(G+1) Villa + Service Block ",
      "area": "Plot No. 233-4538 at Al Qusais- Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621411/hvbbdkm5iff1pmedurdu.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621413/yzssi2ayt1n9ii6xziko.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621415/zvwrrwoc0xmss6e7qrkr.jpg"
      ],
      "completed": true,
"priority":29,
      "createdAt": "2023-05-09T08:36:59.944Z",
      "updatedAt": "2023-05-09T08:36:59.944Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0657ac9f535cc3441e59"),
      "project": "4 (G) Villas ",
      "area": "Al Ragayeb- Ajman",
      "consultant": "Rock Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621456/nozq5ei4e1ggbqdzcirx.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621457/ulnsv4u7eroiiye6rzym.jpg"
      ],
      "completed": true,
"priority":30,
      "createdAt": "2023-05-09T08:37:43.594Z",
      "updatedAt": "2023-05-09T08:37:43.594Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0693ac9f535cc3441e5c"),
      "project": "(B+G+1) Villa ",
      "area": "Plot No. 672-281 at Al Barsha - Dubai",
      "consultant": "Abdullah & Associate Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621519/mo3vk71svnbd6har7fno.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621519/qhwjdw22gzdzpmuriruu.jpg"
      ],
      "completed": true,
"priority":31,
      "createdAt": "2023-05-09T08:38:43.367Z",
      "updatedAt": "2023-05-09T08:38:43.367Z",
      "__v": 0
    },
{
      "_id": new ObjectId("645a071aac9f535cc3441e5f"),
      "project": "Mosque + Imam House + Shops ",
      "area": "Plot No. 824-7954 at Um Al Daman - Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621655/kn74ud4looic5tw1bti6.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621656/w0ucjdli224dtsuj4ee8.jpg"
      ],
      "completed": true,
"priority":32,
      "createdAt": "2023-05-09T08:40:58.886Z",
      "updatedAt": "2023-05-09T08:40:58.886Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a0754ac9f535cc3441e62"),
      "project": "Mosque + Imam House + Shops ",
      "area": "Plot No. 233-106 at Al Qusais- Dubai",
      "consultant": "Islamic Architect and Consulting Engineers",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621712/gsvyy8rijaspgr7judzm.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621714/pp4tyggtqufqkuy7hkdl.jpg"
      ],
      "completed": true,
"priority":33,
      "createdAt": "2023-05-09T08:41:56.904Z",
      "updatedAt": "2023-05-09T08:41:56.904Z",
      "__v": 0
    },
    {
      "_id": new ObjectId("645a079bac9f535cc3441e65"),
      "project": "Mosque + Imam House ",
      "area": "Plot No. 416-2030 at Nad Al Hamar- Dubai",
      "consultant": "Al Dana Engineering Consultants",
      "images": [
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621783/tzrbgzd3scrhevdvaoex.jpg",
        "http://res.cloudinary.com/deypo9kaq/image/upload/v1683621784/du4n1tjtbxlpkoajfst8.jpg"
      ],
      "completed": true,
"priority":34,
      "createdAt": "2023-05-09T08:43:07.140Z",
      "updatedAt": "2023-05-09T08:43:07.140Z",
      "__v": 0
    }
  ]

export default async function handler(req, res) {
  try {
    const projects = await Project.insertMany(data);
    res.status(201).json({ message: "Projects inserted successfully", data: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting projects", error });
  }
}
