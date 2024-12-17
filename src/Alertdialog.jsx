import styled from "styled-components";
import { useState } from "react";



function Alertdialog() {

  const [open, setOpen] = useState(false);

  function boxClick() {
    setOpen((prev) => !prev);
  }


  return (
    <Alertdialogwrap>
      
    

      
    </Alertdialogwrap>
  )
}


export default Alertdialog



const Alertdialogwrap = styled.div`




`
