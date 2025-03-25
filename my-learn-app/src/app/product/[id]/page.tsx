



export default function product({params}) {
  console.log(params?.slug);
  return <div> this is product page with ID {params.id}..</div>
}