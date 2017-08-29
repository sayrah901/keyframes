function getRules(){
	let styles = document.styleSheets;
	let keysArray = [];
	for (var i = 0; i < styles.length; ++i){
		for (var j =0; j < styles[i].cssRules.length; ++j){
			var rules = styles[i].cssRules[j];
			if (rules.type == CSSRule.KEYFRAMES_RULE ){
				keysArray.push(rules);
			}
		}
	}
  return keysArray;
}
var key_frames = {
  delete_frame : function(key_name){
    let rules = getRules();
    for (var keys = 0; keys < rules.length; keys++){
      if (rules[keys].name == key_name && rules.type == CSSRule.KEYFRAMES_RULE){
        rules[keys].deleteRule(0);
        rules[keys].deleteRule(1);
        console.log(rules[keys]);
        alert("deleted");
      }
    }
  }
}
key_frames.delete_frame("mymove");
var test = getRules();
console.log(test);