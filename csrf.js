var forms = Array.from(document.getElementsByTagName("form"))
                 .filter(form => form.method === "get");

forms = forms.map(form =>
  Array.from(form.getElementsByTagName('input'))
       .filter(input => input.type === "search"))
       .filter(form => form.length > 0);

console.log(forms);
