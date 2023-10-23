import Button from "@/components/shared/button"
export default function Home() {


  return (
    <main className="flex font-light min-h-screen flex-col items-center justify-center p-24">
      <h4 className=" ">FinanzTrack</h4> 
      <Button type="primary">Envoyer</Button>
      <br />
      <Button type="secondary">Envoyer</Button>
      <br />
      <Button >Envoyer</Button>
      <br />
      <Button disabled>Envoyer</Button>
    </main>
  )
}
