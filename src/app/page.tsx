import Button from "@/components/shared/button"
import Input from "@/components/shared/input"
import Select from "@/components/shared/select"
export default function Home() {


  return (
    <main className="flex font-light text-sm min-h-screen flex-col items-center justify-center p-24">
      <h4 className=" ">FinanzTrack</h4> 
      <Button block type="primary">Envoyer</Button>
      <Input label={"Enter your name"}/>
      <Select label={"Choose you choice"} options={[{label : 'Thierry', value : 'thierry'}, {label : 'Credo', value : 'credo'}]}/>
    </main>
  )
}
