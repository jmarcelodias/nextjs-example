import Icon from '@/common/components/shared/icon'

const FormHead = () => {
  return (
    <div className='text-center' >
        <h1 className='font-space text-[40px] font-semibold' > NOHS REUNION TICKET </h1>
    
        <div className='mt-3' >
            <div className='flex items-center gap-2' > <Icon name='calendar' /> <span> 09 FEB 2024 </span> </div>
        </div>
    </div>
  )
}

export default FormHead