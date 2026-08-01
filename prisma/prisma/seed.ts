import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const plans = [
    // MTN SME
    { network: 'MTN', name: '1GB SME', size: '1GB', sellPrice: 350, costPrice: 235 },
    { network: 'MTN', name: '2.5GB SME', size: '2.5GB', sellPrice: 750, costPrice: 535 },
    { network: 'MTN', name: '5GB SME', size: '5GB', sellPrice: 1600, costPrice: 1200 },
    { network: 'MTN', name: '10GB SME', size: '10GB', sellPrice: 3500, costPrice: 3228 },
    // AIRTEL CORPORATE
    { network: 'AIRTEL', name: '2GB CORP', size: '2GB', sellPrice: 650, costPrice: 515 },
    { network: 'AIRTEL', name: '4GB CORP', size: '4GB', sellPrice: 1100, costPrice: 765 },
    { network: 'AIRTEL', name: '7GB CORP', size: '7GB', sellPrice: 2300, costPrice: 2060 },
    { network: 'AIRTEL', name: '10GB CORP', size: '10GB', sellPrice: 3300, costPrice: 3010 },
    { network: 'AIRTEL', name: '18GB CORP', size: '18GB', sellPrice: 6200, costPrice: 5820 },
    // GLO CORPORATE
    { network: 'GLO', name: '750MB CORP', size: '750MB', sellPrice: 270, costPrice: 187 },
    { network: 'GLO', name: '1.5GB CORP', size: '1.5GB', sellPrice: 370, costPrice: 280 },
    { network: 'GLO', name: '2.5GB CORP', size: '2.5GB', sellPrice: 570, costPrice: 467 },
    { network: 'GLO', name: '10GB CORP', size: '10GB', sellPrice: 2200, costPrice: 1870 },
  ]
  for(const plan of plans) {
    await prisma.plan.upsert({ where: { id: plan.name }, update: {}, create: plan })
  }
  console.log('Seeded 10 plans')
}
main()
