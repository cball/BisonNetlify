# Migration `20200726203519-profile-timestamps`

This migration has been generated by Chris Ball at 7/26/2020, 8:35:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Profile" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "firstName" text  NOT NULL ,
ADD COLUMN "lastName" text  NOT NULL ,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726094736-initial-migration..20200726203519-profile-timestamps
--- datamodel.dml
+++ datamodel.dml
@@ -2,26 +2,29 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Profile {
-  id     String @id @default(cuid())
-  userId String
-  user   User   @relation(fields: [userId], references: [id])
+  id        String   @id @default(cuid())
+  firstName String
+  lastName  String
+  userId    String
+  user      User     @relation(fields: [userId], references: [id])
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
 }
 model User {
   id        String   @id @default(cuid())
   email     String   @unique
   password  String
-  // role      Role     @default(USER)
   roles     Role[]
   profile   Profile?
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
```


