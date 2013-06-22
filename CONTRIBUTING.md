### Coding Standards: Sass

1. Multiple-line approach (one property and value per line)
1. Always a space after a property's colon (.e.g, `display: block;` and not `display:block;`)
1. Always a before starting braket `.selector {` not `.selector{`
1. End all lines with a semi-colon
1. For multiple, comma-separated selectors, place each selector on it's own line
1. Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).

**Bad Example**

```css
.selector,.another-selector{
	display:block;
	color:red
}
```

**Good Example**

```css
.selector,
.another-selector {
	display: block;
	color: red;
}
```