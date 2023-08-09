import React , {useState , useRef, forwardRef , useImperativeHandle} from 'react'

const ConfirmationModal = forwardRef((props , ref) => {
    const closeRef = useRef();
    const denyRef = useRef();
    const confirmRef = useRef();
  useImperativeHandle(ref , ()=>{
    return {
        focusCloseBtn:() => closeRef.current.focus(),
        focusDenyBtn:() => denyRef.current.focus(),
        focusConfirmBtn:() => confirmRef.current.focus(),
    }
  },[])

  if (props.close) {return null}

  return (
    <div ref={ref}>
        <button ref={closeRef} onClick={() => props.onClose()}>X</button>

        <div>
            <p>Title</p>

            <div>Do you confirm</div>

            <button ref={confirmRef} onClick={() => props.onClose()}>Yes</button>
            <button ref={denyRef} onClick={() => props.onClose()}>No</button>
        </div>

    </div>
  )

})

function UseImperetiveHandle2() {
    const [open , setOpen] = useState(false);
    const modalRef = useRef();

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>Focus close</button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <ConfirmationModal
      ref={modalRef}
      isOpen={open}
      onClose={() => setOpen(false)}
      />
    </div>
  )
}

export default UseImperetiveHandle2
