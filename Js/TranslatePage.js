let greetingParagraph = document.getElementsByClassName('greeting-text')[0];
function GeorgianToEnglish(){
    greetingParagraph.innerHTML = ''; // Deleting Georgian
    greetingParagraph.innerHTML += `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore dolorum, fuga cum aspernatur obcaecati voluptate sequi quisquam hic consectetur saepe magnam recusandae sint libero optio architecto rerum? Sed, cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptates corrupti, voluptate modi iste saepe in similique quidem tenetur pariatur vero odit facilis, at tempore illum necessitatibus voluptatem. Quod, ea.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore dolorum, fuga cum aspernatur obcaecati voluptate sequi quisquam hic consectetur saepe magnam recusandae sint libero optio architecto rerum? Sed, cupiditate.</p>`;
}   
function EnglishToGeorgian(){
    greetingParagraph.innerHTML = ''; // Deleting English
    greetingParagraph.innerHTML += `<p>ქართველი ხალხი განსაკუთრებული სიამაყით აღიარებს თავის კულინარიულ მემკვიდრეობას, და ქართული რესტორნები სწორედ ამის საუკეთესო მაგალითია. საქართველოში რესტორნები განსხვავებული სტილისა და თემატიკისაა, დაწყებული ტრადიციული სამზარეულოს სუფთებით დამთავრებული თანამედროვე გასტრონომიული ადგილებით, რომლებიც მსოფლიო ტენდენციებს ეხმიანება.
                        თბილისში, როგორც ქვეყნის კულინარიულ ცენტრში, მრავლად შეხვდებით რესტორნებს, რომლებიც სტუმრებს სთავაზობენ სხვადასხვა რეგიონის კერძებს. მაგალითად, სვანური კუბდარი, იმერული ხაჭაპური ან კახური შაშხი ხშირად არის მენიუს ცენტრში. ისტორიული უბნების რესტორნებში თქვენ შეგიძლიათ ისიამოვნოთ უძველესი რეცეპტებით მომზადებული კერძებით, რომლებიც უნიკალური არომატით გამოირჩევიან.
                        ბათუმში, შავი ზღვის სანაპიროზე, რესტორნები ხშირად აქცენტს აკეთებენ ზღვის პროდუქტებზე, ადგილობრივი თევზითა და ზღვის დელიკატესებით. რეგიონული სამზარეულო გამორჩეულია თავისი მრავალფეროვნებით, და ეს გამოიხატება ადგილობრივ რესტორნების სუფრებზე.
                        ქართული ღვინის ბარები და რესტორნები ასევე მნიშვნელოვანი ნაწილია ქართული კულტურის პოპულარიზაციის პროცესში. აქ შეგიძლიათ გასინჯოთ მრავალფეროვანი ღვინოები, რომლებიც რქაწითელისა და საფერავის ვაზისგან მზადდება.
                        ქართული რესტორნები არა მხოლოდ შესანიშნავ საკვებს სთავაზობენ, არამედ სტუმრებს ნამდვილ ქართულ გამოცდილებას აძლევენ – ტრადიციული მუსიკით, ცეკვებითა და განუმეორებელი სტუმართმოყვარეობით.</p>`;
}
