// object destructing by targetting different properties of object by their name
export default function CoreConcept({image, title, description}) {
  return (
    <li>
      {/* to use the prop value we should use the same key "img" that we pass through the custom component */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}