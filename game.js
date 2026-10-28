(() => {
'use strict';
const $ = id => document.getElementById(id);
const screens = ['homeScreen','setupScreen','gameScreen','endingScreen','howScreen'];
const statInfo = {
 love:{label:'ความรัก',icon:'♥'}, power:{label:'อำนาจ',icon:'♛'},
 wisdom:{label:'สติปัญญา',icon:'✦'}, revenge:{label:'ความแค้น',icon:'☯'},
 trust:{label:'ความไว้วางใจ',icon:'❀'}, secret:{label:'ความลับ',icon:'☾'}
};
const episodes = [
{title:'ก้าวแรกสู่ตำหนัก',caption:'ประตูวังหลวง · ยามโพล้เพล้',symbol:'❀',speaker:'ผู้บรรยาย',role:'เสียงกระซิบในวัง',text:'เสียงระฆังดังขึ้นเมื่อเกี้ยวของคุณหยุดหน้าประตูสีชาด\\n\\nหญิงรับใช้ก้มกระซิบว่า “จากนี้ไป ทุกคำพูดมีพยาน ทุกน้ำตาอาจกลายเป็นหลักฐาน”\\n\\nฮองเฮาส่งคนมารอรับคุณ ขณะเดียวกัน ชายลึกลับคนหนึ่งยื่นป้ายหยกให้โดยไม่เอ่ยชื่อ',choices:[
['เดินตามคนของฮองเฮาอย่างสง่างาม',{power:8,trust:3,queen:5},'คุณแสดงให้ทุกคนเห็นว่าคุณรู้ธรรมเนียม แต่ฮองเฮาจับตาคุณมากขึ้น'],
['รับป้ายหยกจากชายลึกลับ',{secret:10,wisdom:3,emperor:2},'หยกเย็นเฉียบในมือมีตราที่ถูกลบเลือน คุณเก็บมันไว้โดยไม่ให้ใครเห็น'],
['แสร้งทำเป็นอ่อนแอและหวาดกลัว',{love:3,wisdom:5,trust:4},'ท่าทีไร้พิษภัยทำให้คนรอบข้างประมาทคุณ นั่นอาจเป็นข้อได้เปรียบ'],
['ถามชื่อชายลึกลับตรง ๆ',{wisdom:5,revenge:2,secret:3},'เขาเพียงยิ้มแล้วตอบว่า “เมื่อถึงเวลา ท่านจะรู้เอง”']
]},
{title:'ชายาผู้ยิ้มงาม',caption:'ตำหนักเฟิ่งอี๋ · เช้าวันถัดมา',symbol:'♛',speaker:'ฮองเฮาเฟิ่ง',role:'ผู้ครองกฎแห่งวังหลัง',text:'ฮองเฮาเชิญคุณดื่มชาในสวนเหมย นางยิ้มอ่อนโยนและถามถึงครอบครัวของคุณ\\n\\n“ในวังนี้ คนที่ไม่มีศัตรูมักเป็นคนที่ยังไม่มีความสำคัญ” นางกล่าว ก่อนเลื่อนกล่องของขวัญมาให้\\n\\nภายในเป็นปิ่นทองลายหงส์ แต่ใต้ผ้ากำมะหยี่มีเศษกระดาษซ่อนอยู่',choices:[
['รับปิ่นและกล่าวขอบพระทัย',{queen:8,trust:4,power:3},'ฮองเฮาพอใจ ทว่าคุณยังไม่รู้ว่าของขวัญชิ้นนี้มีราคาเท่าใด'],
['ปฏิเสธอย่างสุภาพ',{wisdom:4,power:2,queen:-3},'รอยยิ้มของนางไม่เปลี่ยน แต่บรรยากาศรอบโต๊ะเย็นลงทันที'],
['แอบอ่านเศษกระดาษ',{secret:8,wisdom:5,queen:-2},'คุณเห็นคำว่า “คืนจันทร์ดับ” และตราประทับของสำนักในวัง'],
['มอบของขวัญกลับด้วยไมตรี',{love:4,trust:6,queen:2},'ฮองเฮาหัวเราะเบา ๆ “เจ้าช่างรู้จักวางตัว”']
]},
{title:'จดหมายใต้หมอน',caption:'ตำหนักชิงเหอ · ยามราตรี',symbol:'✉',speaker:'ผู้บรรยาย',role:'เงาที่ขยับในความมืด',text:'ขณะคุณกำลังจะเข้านอน พบจดหมายฉบับหนึ่งซ่อนอยู่ใต้หมอน\\n\\n“อย่าไว้ใจผู้ที่สวมปิ่นหงส์ ก่อนคืนจันทร์ดับ ความจริงเรื่องการสิ้นพระชนม์ของอดีตฮองเฮาจะถูกฝังตลอดกาล”\\n\\nเสียงฝีเท้าดังขึ้นนอกประตู คุณมีเวลาเพียงชั่วครู่',choices:[
['นำจดหมายไปถวายฮ่องเต้',{emperor:7,power:4,trust:-2},'ฮ่องเต้รับจดหมายไว้ แต่สายตาของพระองค์กลับคล้ายกำลังทดสอบคุณ'],
['เผาจดหมายและทำเหมือนไม่มีอะไรเกิดขึ้น',{trust:3,love:2,secret:-2},'เปลวไฟกลืนตัวอักษร ทว่าคำเตือนยังติดอยู่ในใจคุณ'],
['เก็บจดหมายไว้ใช้ต่อรอง',{power:5,revenge:4,secret:5},'คุณซ่อนจดหมายในช่องลับใต้พื้นไม้ เป็นไพ่ใบแรกของคุณ'],
['แอบสืบหาว่าใครเป็นคนส่งมา',{wisdom:7,secret:6,trust:2},'รอยโคลนหน้าต่างบอกว่าคนส่งสวมรองเท้าของฝ่ายใน ไม่ใช่ขันที']
]},
{title:'งานเลี้ยงใต้แสงเทียน',caption:'หอชมจันทร์ · ค่ำคืนงานเลี้ยง',symbol:'灯',speaker:'องค์หญิงหลัน',role:'ผู้สังเกตการณ์จากหลังม่าน',text:'เสียงพิณคลอไปกับงานเลี้ยง องค์หญิงหลันกระซิบว่ามีคนกำลังจะถูกใส่ร้ายในคืนนี้\\n\\nนางขอให้คุณช่วยสาวใช้คนหนึ่งซึ่งถือถาดสุรา แต่หากคุณก้าวเข้าไปช่วย คุณอาจถูกลากเข้าไปในเรื่องอื้อฉาวด้วย',choices:[
['ช่วยสาวใช้ต่อหน้าทุกคน',{love:5,trust:7,power:-2,princess:7},'สาวใช้รอดพ้นข้อกล่าวหา และองค์หญิงหลันเริ่มมองคุณเป็นพวกเดียวกัน'],
['ส่งสัญญาณให้คนคุ้มกันช่วยเงียบ ๆ',{wisdom:6,trust:4,princess:4},'เรื่องจบลงโดยไม่มีใครรู้ว่าคุณเป็นผู้ช่วยเหลือ'],
['ปล่อยให้เหตุการณ์ดำเนินไป',{power:4,revenge:3,trust:-4},'คุณรักษาตัวเองไว้ได้ แต่แววตาขององค์หญิงหลันเปลี่ยนไป'],
['กล่าวหาคนที่วางแผนทันที',{power:3,wisdom:4,revenge:5,queen:-3},'คำกล่าวหาทำให้งานเลี้ยงเงียบกริบ คนผิดยิ้มบาง ๆ ราวกับรอสิ่งนี้อยู่']
]},
{title:'บุรุษหลังม่าน',caption:'ห้องทรงพระอักษร · หลังเที่ยงคืน',symbol:'龍',speaker:'ฮ่องเต้เซวียน',role:'ผู้มีพระทัยยากหยั่งถึง',text:'ฮ่องเต้เรียกคุณเข้าเฝ้าเป็นการส่วนพระองค์ พระองค์วางป้ายหยกชิ้นหนึ่งบนโต๊ะ—เป็นแบบเดียวกับที่ชายลึกลับมอบให้คุณ\\n\\n“หากข้าถามว่าเจ้าอยากได้สิ่งใดที่สุด เจ้าจะตอบตามจริงหรือไม่?” พระเนตรไม่ละจากใบหน้าคุณ',choices:[
['ตอบว่าต้องการความรักที่จริงใจ',{love:9,emperor:8,power:-2},'พระองค์นิ่งไปครู่หนึ่ง ก่อนตรัสว่าไม่มีสิ่งใดในวังได้มาโดยไร้ราคา'],
['ตอบว่าต้องการอำนาจปกป้องตนเอง',{power:8,wisdom:3,emperor:3},'ฮ่องเต้ยิ้มจาง ๆ “อย่างน้อยเจ้าก็ไม่โกหกตัวเอง”'],
['ตอบว่าต้องการรู้ความจริงของราชวงศ์',{secret:8,wisdom:7,emperor:2},'พระองค์ปิดม่านหน้าต่าง ก่อนเล่าถึงคืนที่อดีตฮองเฮาสิ้นพระชนม์'],
['ย้อนถามว่าพระองค์ต้องการอะไรจากคุณ',{wisdom:6,trust:5,emperor:5},'เป็นครั้งแรกที่ฮ่องเต้หัวเราะอย่างจริงใจ “เจ้าฉลาดกว่าที่ข้าคิด”']
]},
{title:'พิษในถ้วยหยก',caption:'ตำหนักรับรอง · ยามอรุณ',symbol:'☠',speaker:'หมอหลวง',role:'ผู้ถือหลักฐานชิ้นสำคัญ',text:'ขันทีคนสนิทล้มลงหลังดื่มชาในถ้วยหยก ทุกคนถูกสั่งห้ามออกจากตำหนัก และพบผงสีขาวในห้องของคุณ\\n\\nหมอหลวงกระซิบว่าผงนั้นไม่ใช่ยาพิษ แต่เป็นยาที่ใช้รักษาโรคชนิดหนึ่ง ใครบางคนกำลังจัดฉาก',choices:[
['ขอตรวจหลักฐานด้วยตัวเอง',{wisdom:9,secret:3,power:2},'คุณพบว่าตราบนขวดยาถูกปลอมอย่างเร่งรีบ'],
['ขอให้องค์หญิงหลันช่วยเป็นพยาน',{trust:6,princess:8,love:2},'องค์หญิงยอมเสี่ยงชื่อเสียงเพื่อยืนยันว่าคุณไม่ได้อยู่ในห้องนั้น'],
['ใช้จดหมายลับต่อรองกับฮองเฮา',{power:7,revenge:5,queen:-5},'ฮองเฮายอมถอยหนึ่งก้าว แต่เตือนว่าคุณเพิ่งเริ่มเล่นเกมนี้'],
['ยอมรับผิดเพื่อปกป้องคนรับใช้',{love:7,trust:5,power:-6},'คนรับใช้รอดพ้นการลงโทษ และความเสียสละของคุณแพร่ไปทั่ววัง']
]},
{title:'มิตรหรือศัตรู',caption:'สวนเหมย · ใต้เงาดอกไม้',symbol:'狐',speaker:'ชายลึกลับ',role:'ผู้ครอบครองความทรงจำที่หายไป',text:'ชายลึกลับปรากฏตัวอีกครั้ง เขาเปิดเผยว่าครั้งหนึ่งเคยเป็นองครักษ์ของอดีตฮองเฮา และเชื่อว่าการสิ้นพระชนม์ของนางไม่ใช่อุบัติเหตุ\\n\\nเขาขอให้คุณร่วมมือ แต่ไม่ยอมบอกว่าทำไมจึงเลือกคุณ',choices:[
['ร่วมมือและแบ่งปันข้อมูล',{trust:8,secret:6,revenge:3},'เขาเผยชื่อจริงว่า “เว่ยหลง” และมอบกุญแจห้องเก็บบันทึก'],
['แสร้งร่วมมือเพื่อสืบความลับเขา',{wisdom:8,secret:4,power:3,trust:-3},'คุณรับกุญแจไว้ แต่เตรียมแผนสำรองหากเขาเป็นศัตรู'],
['ปฏิเสธและเตือนให้เขาหายไป',{power:3,trust:-2,revenge:2},'เขาก้มศีรษะแล้วจากไป ทิ้งคำพูดว่า “ความจริงจะตามหาท่านเอง”'],
['ถามว่าอดีตฮองเฮาเกี่ยวข้องกับคุณอย่างไร',{secret:10,wisdom:5,trust:3},'เขามองคุณด้วยแววตาเศร้า “นางเคยช่วยชีวิตคนในตระกูลของท่าน”']
]},
{title:'คืนแห่งการทรยศ',caption:'หอจดหมายเหตุ · คืนจันทร์ดับ',symbol:'☾',speaker:'องค์หญิงหลัน',role:'ความจริงที่ถูกซ่อน',text:'ประตูห้องเก็บบันทึกเปิดออก เผยเอกสารที่ถูกซ่อนมานาน คุณพบว่าการสิ้นพระชนม์ของอดีตฮองเฮาเกี่ยวข้องกับการปลอมพระราชโองการ\\n\\nแต่ลายมือในเอกสารฉบับสุดท้ายกลับเหมือนลายมือของคนที่คุณเคยช่วยไว้ ความไว้ใจที่สะสมมาทั้งหมดกำลังถูกทดสอบ',choices:[
['เปิดโปงเอกสารต่อหน้าทุกฝ่าย',{power:6,wisdom:6,revenge:5,trust:-2},'ความจริงเริ่มรั่วไหล แต่ผู้มีอำนาจหลายคนหันมาเป็นศัตรูกับคุณ'],
['เก็บหลักฐานและรอเวลาที่เหมาะสม',{wisdom:8,power:4,secret:4},'คุณซ่อนเอกสารสำคัญไว้และตัดสินใจว่าจะเปิดมันเมื่อไม่มีทางถูกปิดปาก'],
['เผาเอกสารเพื่อปกป้องคนที่รัก',{love:8,trust:5,secret:-5},'ไฟเผาทำลายหลักฐาน แต่ช่วยให้คนคนหนึ่งรอดจากข้อกล่าวหา'],
['ใช้หลักฐานบีบให้ผู้ทรยศสารภาพ',{power:7,revenge:8,wisdom:3},'ผู้ทรยศยอมพูดความจริง ทว่าคำสารภาพนั้นทำให้คุณต้องเลือกระหว่างความยุติธรรมกับความแค้น']
]},
{title:'ศึกชิงอำนาจ',caption:'ท้องพระโรง · ก่อนรุ่งสาง',symbol:'⚔',speaker:'ผู้บรรยาย',role:'การตัดสินใจครั้งสุดท้าย',text:'ข่าวลือเรื่องพระราชโองการปลอมแพร่ไปทั่วเมือง ฮ่องเต้เรียกประชุมขุนนาง ขณะที่ฮองเฮาเสนอให้คุณเป็นผู้รับผิดชอบเรื่องทั้งหมด\\n\\nนี่คือโอกาสสุดท้ายที่จะกำหนดว่าคุณจะยืนอยู่จุดใดของประวัติศาสตร์',choices:[
['เปิดเผยความจริงทั้งหมด',{wisdom:8,revenge:4,power:3,trust:2},'ความจริงสั่นคลอนราชสำนัก แต่ประชาชนเริ่มจดจำชื่อของคุณ'],
['ต่อรองตำแหน่งเพื่อแลกกับความเงียบ',{power:10,secret:3,trust:-4},'คุณได้อำนาจและความคุ้มครอง แต่ความลับจะผูกติดกับคุณไปตลอด'],
['ปกป้องฮ่องเต้และยอมรับความเสี่ยง',{love:8,emperor:8,trust:4,power:-2},'พระองค์ยืนเคียงข้างคุณต่อหน้าขุนนางเป็นครั้งแรก'],
['ร่วมมือกับองค์หญิงเปลี่ยนกฎในวัง',{princess:8,wisdom:6,trust:7,power:3},'คุณและองค์หญิงเสนอให้ยุติธรรมเนียมที่ทำให้สตรีต้องห้ำหั่นกัน']
]},
{title:'ชะตาสุดท้าย',caption:'พระราชอุทยาน · แสงแรกแห่งวันใหม่',symbol:'凰',speaker:'ผู้บรรยาย',role:'บทสรุปของสิบการตัดสินใจ',text:'รุ่งอรุณสาดแสงลงบนหลังคาวังหลวง เสียงระฆังดังขึ้นอีกครั้ง แต่คราวนี้คุณไม่ใช่หญิงสาวที่ก้าวเข้ามาอย่างไม่รู้ชะตา\\n\\nคนที่คุณช่วย คนที่คุณทรยศ ความลับที่คุณเลือกเก็บ และความจริงที่คุณกล้าเผชิญ—ทั้งหมดจะตัดสินว่าชื่อของคุณจะถูกจารึกไว้เช่นไร\\n\\nจงเลือกก้าวสุดท้ายของคุณ',choices:[
['เลือกอำนาจและปกครองเกมนี้',{power:7,revenge:2},'คุณยื่นมือไปหาบัลลังก์ที่ครั้งหนึ่งเคยอยู่ไกลเกินเอื้อม'],
['เลือกความรักและคนที่ไว้ใจ',{love:7,trust:5},'คุณหันหลังให้เสียงเรียกของอำนาจ แล้วเลือกคนที่ยืนเคียงข้างคุณ'],
['เลือกอิสรภาพเหนือทุกสิ่ง',{wisdom:4,trust:3,secret:2},'คุณมองประตูวังที่เปิดออก และรู้ว่าครั้งนี้ไม่มีใครสั่งให้คุณอยู่ได้'],
['เลือกเปิดเผยความลับสุดท้าย',{secret:8,wisdom:5,revenge:3},'คุณคลี่ผ้าห่อหยก เผยตราประทับที่เชื่อมโยงคุณกับอดีตฮองเฮา']
]}
];
const endings = [
{id:'empress',title:'ฮองเฮาผู้กุมอำนาจ',tag:'บัลลังก์ไม่เคยได้มาโดยไร้ราคา',sigil:'凰',symbol:'👑',rank:'ENDING 01 · ผู้ครองวัง',text:'คุณก้าวขึ้นสู่ตำแหน่งสูงสุดด้วยความสุขุมและการอ่านเกมที่เฉียบคม ผู้คนถวายความเคารพ แต่ไม่มีใครรู้ว่าคุณไว้ใจใครได้จริง\\n\\nคุณเปลี่ยนกฎของวังจากภายใน และกลายเป็นสตรีที่ประวัติศาสตร์ไม่อาจลืม แม้ค่ำคืนบางคืนจะยังมีเสียงกระซิบจากอดีตตามหลอกหลอน',test:s=>s.power>=68},
{id:'beloved',title:'พระสนมผู้เป็นที่รัก',tag:'ในวังที่เต็มไปด้วยเล่ห์กล ความจริงใจคือสิ่งหายาก',sigil:'♡',symbol:'🌸',rank:'ENDING 02 · รักเหนืออำนาจ',text:'คุณไม่ได้ครอบครองทุกสิ่ง แต่ได้ความรักและความสัมพันธ์ที่ผ่านการพิสูจน์ด้วยการกระทำ คนที่เคยเห็นคุณเป็นเพียงหมากกลับยอมยืนเคียงข้างคุณ\\n\\nชีวิตในวังยังไม่ไร้ปัญหา ทว่าคุณได้เรียนรู้ว่าความรักที่แท้จริงไม่ควรต้องแลกด้วยการสูญเสียตัวเอง',test:s=>s.love>=65&&s.trust>=45},
{id:'puppet',title:'ราชินีผู้ชักใย',tag:'ผู้ที่มองเห็นทุกเส้นด้าย ย่อมไม่จำเป็นต้องนั่งบนบัลลังก์',sigil:'狐',symbol:'🦊',rank:'ENDING 03 · ผู้ควบคุมเกม',text:'คุณไม่เคยเป็นผู้เล่นธรรมดา ทุกคำพูดและทุกความเงียบล้วนมีความหมาย คุณปล่อยให้คนอื่นแย่งชิงตำแหน่ง ขณะที่ตัวเองค่อย ๆ กุมความลับของทุกฝ่าย\\n\\nท้ายที่สุดไม่มีใครพิสูจน์ได้ว่าคุณอยู่เบื้องหลังอะไรบ้าง และนั่นคือชัยชนะที่สมบูรณ์แบบที่สุดของคุณ',test:s=>s.wisdom>=65&&s.secret>=55},
{id:'freedom',title:'ผู้ชนะที่เดินจากไป',tag:'บางครั้งชัยชนะคือการเลือกประตูที่เปิดออก',sigil:'🕊',symbol:'🕊️',rank:'ENDING 04 · อิสรภาพ',text:'เมื่อโอกาสมาถึง คุณเลือกออกจากวังโดยไม่หันกลับไปมอง คุณทิ้งตำแหน่งที่หลายคนยอมทำทุกอย่างเพื่อให้ได้มา\\n\\nนอกกำแพงวัง คุณได้ใช้ชีวิตด้วยชื่อของตัวเอง และค้นพบว่าความสงบที่เลือกเองมีค่ามากกว่ามงกุฎใด ๆ',test:s=>s.trust>=42&&s.power<60&&s.revenge<55},
{id:'revenge',title:'ดอกเหมยกลางกองเพลิง',tag:'ความแค้นมอบแรงให้คุณยืนขึ้น แต่ไม่อาจมอบความสงบ',sigil:'🥀',symbol:'🥀',rank:'ENDING 05 · การชำระแค้น',text:'คุณเปิดโปงผู้ที่ทำลายชีวิตคนในอดีต และไม่ยอมให้ความผิดถูกฝังใต้พรมอีกต่อไป ผู้ทรยศต้องรับผลจากการกระทำ แต่ชัยชนะครั้งนี้ทิ้งรอยแผลไว้ในใจคุณ\\n\\nเมื่อทุกอย่างจบลง คุณต้องเรียนรู้ว่าจะใช้ชีวิตต่ออย่างไร เมื่อไม่มีศัตรูให้ไล่ตามอีกแล้ว',test:s=>s.revenge>=65},
{id:'forgotten',title:'สตรีผู้ถูกลืม',tag:'บางครั้งการรอดชีวิตก็เป็นชัยชนะที่เงียบงัน',sigil:'🥀',symbol:'🌫️',rank:'ENDING 06 · เงาในวัง',text:'คุณรอดจากแผนร้าย แต่ชื่อของคุณค่อย ๆ เลือนหายจากบันทึก ไม่มีผู้ใดรู้ว่าคุณเคยช่วยใครไว้ หรือสูญเสียสิ่งใดเพื่อให้คนอื่นปลอดภัย\\n\\nทว่าในสวนเหมยที่ไม่มีใครเข้า คุณยังคงมีชีวิต และเรื่องราวที่ไม่มีใครจดจำก็ยังเป็นเรื่องราวของคุณ',test:s=>s.power<38&&s.love<42},
{id:'truth',title:'ความลับแห่งราชวงศ์',tag:'ความจริงที่ถูกฝัง อาจมีชีวิตยืนยาวกว่าบัลลังก์',sigil:'☾',symbol:'📜',rank:'ENDING 07 · ผู้เปิดม่าน',text:'หลักฐานชิ้นสุดท้ายเผยให้เห็นสายสัมพันธ์ระหว่างคุณกับอดีตฮองเฮา คุณไม่ได้เป็นเพียงผู้สืบความจริง แต่เป็นกุญแจที่ทำให้ประวัติศาสตร์ทั้งบทต้องถูกเขียนใหม่\\n\\nคุณเลือกเปิดเผยความจริง แม้จะรู้ว่าหลังจากวันนี้ ไม่มีใครมองราชวงศ์เหมือนเดิมอีกต่อไป',test:s=>s.secret>=68&&s.wisdom>=55},
{id:'exile',title:'นักโทษแห่งวังหลวง',tag:'หนึ่งความผิดพลาดเปลี่ยนทุกสิ่ง แต่เรื่องราวยังไม่จบ',sigil:'⛓',symbol:'🌑',rank:'ENDING 08 · โศกนาฏกรรม',text:'พันธมิตรแตกสลายและหลักฐานย้อนกลับมาหาคุณ คุณถูกเนรเทศออกจากวัง ทิ้งไว้เพียงคำถามว่าใครเป็นผู้ชักใยตัวจริง\\n\\nในคืนที่ประตูปิดลง คุณสาบานว่าจะไม่ยอมให้ชะตาของตัวเองถูกเขียนโดยผู้อื่นอีก หากมีโอกาสครั้งที่สอง คุณจะเลือกต่างไปหรือไม่',test:s=>true}
];
let state, selectedOrigin='noble', soundOn=false;
function freshState(){return {episode:0,name:'หลินเยว่',origin:'noble',stats:{love:35,power:30,wisdom:35,revenge:15,trust:35,secret:10},relations:{emperor:0,princess:0,queen:0},clues:0,history:[],started:false};}
function showScreen(id){screens.forEach(s=>$(s).classList.toggle('hidden',s!==id));window.scrollTo({top:0,behavior:'smooth'});}
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2400);}
function clamp(n){return Math.max(0,Math.min(100,n));}
function renderStats(){const s=state.stats;$('statsList').innerHTML=Object.entries(statInfo).map(([key,v])=>`<div class="stat-row"><span class="stat-icon">${v.icon}</span><div><div class="stat-name"><span>${v.label}</span><b>${s[key]}</b></div><div class="stat-bar"><i style="width:${s[key]}%"></i></div></div><span></span></div>`).join('');$('emperorRel').textContent='ความสัมพันธ์: '+state.relations.emperor;$('princessRel').textContent='ความสัมพันธ์: '+state.relations.princess;$('queenRel').textContent='ความสัมพันธ์: '+state.relations.queen;$('clueCount').textContent='เบาะแสที่พบ '+state.clues+' ชิ้น';}
function renderEpisode(){const ep=episodes[state.episode];$('chapterLabel').textContent=`ตอนที่ ${String(state.episode+1).padStart(2,'0')} / 10`;$('chapterTitle').textContent=ep.title;$('progressBar').style.width=((state.episode+1)*10)+'%';$('sceneCaption').textContent=ep.caption;$('sceneSymbol').textContent=ep.symbol;$('speakerName').textContent=ep.speaker;$('speakerRole').textContent=ep.role;$('speakerAvatar').textContent=ep.speaker==='ฮ่องเต้เซวียน'?'帝':ep.speaker==='ฮองเฮาเฟิ่ง'?'鳳':ep.speaker==='องค์หญิงหลัน'?'蘭':'宮';$('storyText').textContent=ep.text.replaceAll('คุณ',state.name);$('feedback').classList.add('hidden');$('choiceList').innerHTML='';ep.choices.forEach((choice,i)=>{const b=document.createElement('button');b.className='choice-btn';b.innerHTML=`<span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${choice[0]}</span>`;b.addEventListener('click',()=>choose(i));$('choiceList').appendChild(b);});renderStats();}
function choose(index){const ep=episodes[state.episode],c=ep.choices[index];Object.entries(c[1]).forEach(([k,v])=>{if(statInfo[k])state.stats[k]=clamp(state.stats[k]+v);else if(state.relations[k]!==undefined)state.relations[k]=clamp(state.relations[k]+v);});if(state.episode===2&&index===2)state.clues++;if(state.episode===2&&index===3)state.clues++;if(state.episode===5&&index===0)state.clues++;if(state.episode===6&&(index===0||index===3))state.clues++;if(state.episode===7&&index!==2)state.clues++;state.history.push({episode:state.episode,choice:index,text:c[0]});$('storyText').textContent=c[2].replaceAll('คุณ',state.name);$('choiceList').innerHTML='';$('feedback').textContent='✦ '+c[2];$('feedback').classList.remove('hidden');const next=document.createElement('button');next.className='btn btn-gold';next.style.marginTop='14px';next.textContent=state.episode===9?'เปิดเผยชะตาสุดท้าย ↗':'ดำเนินเรื่องต่อ ↗';next.addEventListener('click',()=>{state.episode++;save(false);if(state.episode>=episodes.length)showEnding();else renderEpisode();});$('choiceList').appendChild(next);renderStats();save(false);}
function getEnding(){const s=state.stats;const candidates=endings.filter(e=>e.test(s));candidates.sort((a,b)=>{const score=e=>{switch(e.id){case'empress':return s.power;case'beloved':return s.love+s.trust;case'puppet':return s.wisdom+s.secret;case'freedom':return s.trust-s.power/2-s.revenge/2;case'revenge':return s.revenge;case'forgotten':return 100-s.power+100-s.love;case'truth':return s.secret+s.wisdom;default:return -1;}};return score(b)-score(a);});return candidates[0]||endings[endings.length-1];}
function showEnding(){const e=getEnding();$('endingSigil').textContent=e.sigil;$('endingTitle').textContent=e.title;$('endingTagline').textContent=e.tag;$('endingRank').textContent=e.rank;$('endingText').textContent=e.text.replaceAll('คุณ',state.name);$('endingArtSymbol').textContent=e.symbol;$('endingStats').innerHTML=Object.entries(statInfo).map(([k,v])=>`<span>${v.icon} ${v.label} ${state.stats[k]}</span>`).join('');showScreen('endingScreen');localStorage.removeItem('wanglang-save');$('continueBtn').classList.add('hidden');}
function save(show=true){try{localStorage.setItem('wanglang-save',JSON.stringify(state));if(show)toast('บันทึกชะตาของคุณแล้ว ✦');}catch(e){if(show)toast('อุปกรณ์นี้ไม่รองรับการบันทึกอัตโนมัติ');}}
function load(){try{const raw=localStorage.getItem('wanglang-save');if(!raw)return false;const s=JSON.parse(raw);if(!s||!Number.isInteger(s.episode)||s.episode<0||s.episode>=episodes.length)return false;state=s;return true;}catch(e){return false;}}
function startSetup(){state=freshState();selectedOrigin='noble';document.querySelectorAll('.origin-card').forEach(c=>c.classList.toggle('selected',c.dataset.origin==='noble'));$('playerName').value='หลินเยว่';showScreen('setupScreen');}
function begin(){state=freshState();state.name=$('playerName').value.trim().slice(0,18)||'หลินเยว่';state.origin=selectedOrigin;const bonus={noble:{power:10},fallen:{wisdom:10},mystery:{secret:10},revenge:{revenge:10}}[selectedOrigin];Object.entries(bonus).forEach(([k,v])=>state.stats[k]=clamp(state.stats[k]+v));state.started=true;save(false);showScreen('gameScreen');renderEpisode();}
$('startBtn').addEventListener('click',startSetup);$('brandHome').addEventListener('click',e=>{e.preventDefault();showScreen('homeScreen');});$('beginStoryBtn').addEventListener('click',begin);$('howBtn').addEventListener('click',()=>showScreen('howScreen'));$('howBackBtn').addEventListener('click',()=>showScreen('homeScreen'));$('saveBtn').addEventListener('click',()=>save(true));$('homeBtn').addEventListener('click',()=>showScreen('homeScreen'));$('replayBtn').addEventListener('click',startSetup);$('continueBtn').addEventListener('click',()=>{if(load()){showScreen('gameScreen');renderEpisode();}else toast('ไม่พบข้อมูลเกมที่บันทึกไว้');});$('soundBtn').addEventListener('click',()=>{soundOn=!soundOn;$('soundBtn').textContent=soundOn?'♫̸':'♫';toast(soundOn?'เปิดโหมดเสียงแล้ว (ยังไม่มีเสียงประกอบในเวอร์ชันนี้)':'ปิดโหมดเสียง');});document.querySelectorAll('.origin-card').forEach(c=>c.addEventListener('click',()=>{selectedOrigin=c.dataset.origin;document.querySelectorAll('.origin-card').forEach(x=>x.classList.toggle('selected',x===c));}));if(load())$('continueBtn').classList.remove('hidden');
})();