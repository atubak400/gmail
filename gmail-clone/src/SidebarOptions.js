import './sidebarOptions.css'

export default function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOptions ${selected && 'sidebarOption--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}
