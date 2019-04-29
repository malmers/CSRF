var forms = Array.from(document.getElementsByTagName("form"))
                 .filter(form => form.method !== "get");

forms = forms.filter(form =>
  Array.from(form.getElementsByTagName('input'))
       .every(input => input.type !== "hidden"));


if(forms.length) {
  console.log(forms);
} else {
  console.log("No such form");
}
