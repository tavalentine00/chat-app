import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
    args: {
        user: v.string(),
        message: v.string(),
    },
    handler: async (ctx, args) => {
        console.log("This TypeScript function is running on the server")
        await ctx.db.insert("messages", {
            user: args.user,
            message: args.message,
        });
    }
})