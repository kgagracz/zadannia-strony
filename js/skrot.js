function abbreviation() {
    let result;
    let skroty = document.getElementById('skrot').value;

    switch(skroty) {
        case 'PZPN':
        result = 'Polski Związek Piłki Nożnej';
        break;
        case 'FIFA':
        result = 'Federation Internationale de Football Association';
        break;
        case 'PESEL':
        result = 'Powszechny Elektreoniczny System Ewidencji Ludności';
        break;
        case 'THC':
        result = 'Tytro-hydro-kannabinol';
        break;
        case 'JS':
        result = 'JavaScript';
        break;
        case 'PZPR':
        result = 'Polski Związek Piłki Ręcznej';
        break;
        default:
        result = 'Nie ma takiego wpisu w bazie skrótów'

    }
    document.getElementById('info').innerHTML = result;
    console.log('check')
}

document.getElementById('check').addEventListener('click', abbreviation);



function przyslowia() {
    let keyword = document.getElementById('keyword').value;
    let result = document.getElementById('info2');
    let sentencesFound = 0;
    let przyslowia = [
     'Kto pod kim dołki kopie, ten sam w nie wpada',
     'Co kraj, to obyczaj', 
     'Lepszy wróbel w garści niż gołąb na dachu.', 
     'Cisza jak makiem zasiał.', 
     'Wystroił się jak stróż w Boże ciało.',
     'Nie ma tego złego, co by na dobre nie wyszło.',
     'Przyszła koza do woza.',
     'Kłamstwo ma krótkie nogi.',
     'Ładnemu we wszystkim ładnie.',
     'Co cię nie zabije, to cię wzmocni.',
     'Wyszło szydło z worka.',
     'Kto pierwszy ten lepszy.',
     'Ten się śmieje, kto się śmieje ostatni.',
     'Trafiła kosa na kamień.',
     'Prawda w oczy kole.',
     'Gdy się człowiek spieszy, to się diabeł cieszy.',
     'Co ma piernik do wiatraka?',
     'Paluszek i główka to szkolna wymówka.',
     'Czym chata bogata tym gościom rada.',
     'Ni z gruszki, ni z pietruszki.',
     'Lepsza byle jaka prawda, niż dobre kłamstwo.',
     'Licho nie śpi.',
     'Szukać igły w stogu siana.',
    ];
    
    przyslowia.forEach((element) => {
        if (element.toLowerCase().search(keyword.toLowerCase()) !== -1) {
          result.innerHTML += element + "</br>";
          sentencesFound++;
        }
      });
      if (sentencesFound === 0) {
        result.innerHTML = "Nie znaleziono przysłowia";
      }
    

}


document.getElementById('check2').addEventListener('click', przyslowia);