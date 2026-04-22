import { ChevronDown } from 'lucide-react'
import './ProfileBadge.css'

export function ProfileBadge() {
  return (
    <button type="button" className="profile-badge">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80"
        alt="Yuki R."
      />
      <span className="profile-badge__meta">
        <span className="profile-badge__name">Yuki R.</span>
        <span className="profile-badge__plan">Premium</span>
      </span>
      <ChevronDown size={14} />
    </button>
  )
}
