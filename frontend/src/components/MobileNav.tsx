import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from './ui/sheet'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

function MobileNav () {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-green-700' />
      </SheetTrigger>
      <SheetContent className='space-y-3'>
        <SheetTitle>
          <span>SnackSprint</span>
        </SheetTitle>
        <Separator>
          <SheetDescription className='flex'>
            <Button className='flex-1 font-bold bg-green-500'>Login</Button>
          </SheetDescription>
        </Separator>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
