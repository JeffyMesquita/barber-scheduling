# 1. Barber Scheduling

## Problem

A barber shop has a single barber who is available to cut hair. Customers arrive and wait in a queue until the barber is available. When the barber is finished with a customer, the next customer in the queue is called to the chair. The barber is paid $20 per haircut, and the shop is open for 10 hours each day. The barber can cut hair for 30 minutes each hour. The barber shop owner wants to know how much money the barber can make each day.

# 2. NextJs project

## 2.1 Start a new project

```bash
npx create-next-app@latest barber-scheduling
```

## 2.2 Using Prisma

```bash
npm install prisma --save-dev
```

## 2.3 Init Prisma

```bash
npx prisma init --datasource-provider postgresql
```

## 2.4 Create a new model

```bash
npx prisma generate
```

## 2.5 Create a new migration

```bash
npx prisma migrate dev --name `YourMigrationName`
```
