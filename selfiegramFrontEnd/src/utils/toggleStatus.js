export default function toggleStatus(elements, targetId, attribute, result) {
	elements.map((el)=>{
    if(el.id == targetId)
      el[attribute] = result;
    return el;
  });

  return elements;
};