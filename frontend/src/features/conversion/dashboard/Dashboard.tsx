import { DashboardFirstTimeScreen } from '@/features/conversion/dashboard/DashboardFirstTimeScreen'
import { RecentConversions } from '@/features/conversion/dashboard/RecentConversions'

export function Dashboard() {
  return (
    <>
      <DashboardFirstTimeScreen />
      <RecentConversions />
    </>
  )
}
