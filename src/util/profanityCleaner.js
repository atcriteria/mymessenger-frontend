// See: https://github.com/web-mech/badwords/issues/93#issuecomment-821727619
// The bad-words library currentlyt has a bug where the 
// regex crashes when trying to read symbols. This user
// provided the following solution. We extend the Filter
// class to add our own 'cleaner' method which attempts
// to clean the given string. If the cleaner throws an
// error we catch it and try to fix up the string with
// some fancy RegEx work. 

import Filter from 'bad-words';

class ProfanityFilter extends Filter {
    cleaner(string){
        try {
            return this.clean(string);
        } catch {
            const joinMatch = this.splitRegex.exec(string);
            const joinString = (joinMatch && joinMatch[0]) || '';
            return string.split(this.splitRegex).map((word) => {
              return this.isProfane(word) ? this.replaceWord(word) : word;
            }).join(joinString);
        }
    }
}

export default ProfanityFilter;